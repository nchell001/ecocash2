import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Apply() {
  const [formData, setFormData] = useState({
    fullName: '',
    nationalId: '',
    mobileNumber: '',
    loanAmount: '',
    repaymentPeriod: '',
    acceptTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [flowStep, setFlowStep] = useState<'form' | 'checking' | 'readyToVerify'>('form');
  const [applicationId, setApplicationId] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    setFlowStep('checking');

    if (!formData.acceptTerms) {
      setError('You must accept the terms and conditions to continue.');
      setIsSubmitting(false);
      setFlowStep('form');
      return;
    }

    if (!supabase) {
      setError('The application form is temporarily unavailable. Please try again later.');
      setIsSubmitting(false);
      setFlowStep('form');
      return;
    }

    try {
      const { data, error: dbError } = await supabase
        .from('loan_applications')
        .insert({
          full_name: formData.fullName,
          national_id: formData.nationalId,
          mobile_number: formData.mobileNumber,
          loan_amount: parseInt(formData.loanAmount, 10),
          repayment_period: parseInt(formData.repaymentPeriod, 10),
          status: 'pending_verification',
        })
        .select('id')
        .single();

      if (dbError || !data) {
        throw dbError;
      }

      setApplicationId(data.id);
      setFlowStep('readyToVerify');
    } catch (err) {
      console.error('Error submitting application:', err);
      setError('An error occurred while submitting your application. Please try again.');
      setFlowStep('form');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoToVerification = () => {
    if (!applicationId) return;
    navigate(`/verify/${applicationId}`, { state: { mobileNumber: formData.mobileNumber } });
  };

  if (flowStep === 'checking') {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center py-12">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 flex justify-center">
            <div className="h-12 w-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Checking eligibility</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Please wait a moment while we review your application details.
          </p>
        </div>
      </div>
    );
  }

  if (flowStep === 'readyToVerify') {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center py-12">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-emerald-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">You&apos;re eligible!</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Next step: verify your InnBucks phone number to confirm this application.
          </p>
          <button
            type="button"
            onClick={handleGoToVerification}
            className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors font-semibold text-lg"
          >
            Verify phone number
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-emerald-50 to-green-100 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Apply for a Loan
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Complete the form below to apply for your InnBucks loan. Takes less than 5 minutes.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-6 md:p-8">
            {error && (
              <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <p className="text-red-800">{error}</p>
              </div>
            )}

            <div className="mb-6">
              <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 text-lg"
                placeholder="Enter your full name as per ID"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="nationalId" className="block text-gray-700 font-semibold mb-2">
                National ID Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="nationalId"
                name="nationalId"
                value={formData.nationalId}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 text-lg"
                placeholder="e.g., 63-123456-A-12"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="mobileNumber" className="block text-gray-700 font-semibold mb-2">
                InnBucks Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 text-lg"
                placeholder="e.g., 0771234567"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="loanAmount" className="block text-gray-700 font-semibold mb-2">
                Loan Amount <span className="text-red-500">*</span>
              </label>
              <select
                id="loanAmount"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 text-lg"
              >
                <option value="">Select loan amount</option>
                <option value="10">$10 (Repay $12 in 7 days)</option>
                <option value="50">$50 (Repay $60 in 14 days)</option>
                <option value="150">$150 (Repay $180 in 21 days)</option>
                <option value="200">$200 (Repay $250 in 30 days)</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="repaymentPeriod" className="block text-gray-700 font-semibold mb-2">
                Repayment Period <span className="text-red-500">*</span>
              </label>
              <select
                id="repaymentPeriod"
                name="repaymentPeriod"
                value={formData.repaymentPeriod}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 text-lg"
              >
                <option value="">Select repayment period</option>
                <option value="7">7 days</option>
                <option value="14">14 days</option>
                <option value="21">21 days</option>
                <option value="30">30 days</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="mt-1 h-5 w-5 text-emerald-600 focus:ring-emerald-600 border-gray-300 rounded"
                />
                <span className="text-gray-700 leading-relaxed">
                  I accept the{' '}
                  <a href="/terms" target="_blank" className="text-emerald-600 hover:underline font-semibold">
                    Terms & Conditions
                  </a>{' '}
                  and{' '}
                  <a href="/privacy" target="_blank" className="text-emerald-600 hover:underline font-semibold">
                    Privacy Policy
                  </a>
                  . I confirm that all information provided is accurate. <span className="text-red-500">*</span>
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors font-semibold text-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
            </button>
          </form>

          <div className="mt-8 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
            <h3 className="font-semibold text-amber-900 mb-2">Important Information</h3>
            <ul className="space-y-2 text-amber-800 text-sm">
              <li>• Loan approval is subject to verification and eligibility criteria</li>
              <li>• You must be 18 years or older to apply</li>
              <li>• All information will be kept confidential and secure</li>
              <li>• Processing time is typically 2-4 hours during business hours</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
