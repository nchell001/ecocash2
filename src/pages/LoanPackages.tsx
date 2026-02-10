import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Calendar, TrendingUp, Clock } from 'lucide-react';

export default function LoanPackages() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endTime = Date.now() + 24 * 60 * 60 * 1000;

    const interval = setInterval(() => {
      const diff = endTime - Date.now();

      if (diff <= 0) {
        setTimeLeft({
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        clearInterval(interval);
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTimeUnit = (value: number) => String(value).padStart(2, '0');

  const packages = [
    {
      amount: 10,
      repayment: 12,
      days: 7,
      serviceFee: 0,
      popular: false,
    },
    {
      amount: 50,
      repayment: 60,
      days: 14,
      serviceFee: 0,
      popular: false,
    },
    {
      amount: 150,
      repayment: 180,
      days: 21,
      serviceFee: 0,
      popular: true,
    },
    {
      amount: 200,
      repayment: 25,
      days: 30,
      serviceFee: 0,
      popular: false,
    },
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Loan Packages
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Choose the package that fits your needs. All fees are transparent with no hidden charges.
          </p>

        <div className="mt-6 inline-flex items-center gap-3 bg-primary text-white px-4 py-2 rounded-full shadow-md">
            <Clock className="h-5 w-5" />
            <p className="text-sm md:text-base font-semibold">
              0 service fees promo ends in{' '}
              <span className="font-mono">
                {formatTimeUnit(timeLeft.hours)}:{formatTimeUnit(timeLeft.minutes)}:
                {formatTimeUnit(timeLeft.seconds)}
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 ${
                  pkg.popular ? 'ring-2 ring-emerald-600' : ''
                }`}
              >
                {pkg.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-semibold">
                    Popular
                  </div>
                )}
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-2">
                      ${pkg.amount}
                    </h3>
                    <p className="text-gray-600">Loan Amount</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-5 w-5 text-emerald-600" />
                        <span className="text-gray-700">Repay</span>
                      </div>
                      <span className="font-bold text-gray-900">${pkg.repayment}</span>
                    </div>

                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5 text-emerald-600" />
                        <span className="text-gray-700">Period</span>
                      </div>
                      <span className="font-bold text-gray-900">{pkg.days} days</span>
                    </div>

                    <div className="flex items-center justify-between py-3">
                      <span className="text-gray-700">Service Fee</span>
                      <span className="font-bold text-emerald-600">${pkg.serviceFee}</span>
                    </div>
                  </div>

                  <Link
                    to="/apply"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                      pkg.popular
                        ? 'bg-primary text-white hover:bg-primary-light'
                        : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                    }`}
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <p className="text-blue-900 font-medium">
              <strong>Note:</strong> Loan approval is subject to verification and eligibility criteria. Service fees are included in the repayment amount shown above.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Package Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-emerald-600">
                Flexible Terms
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Choose a repayment period that works for your budget, from 7 to 30 days.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-emerald-600">
                Transparent Pricing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                See exactly what you'll repay before you apply. No surprises or hidden fees.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-emerald-600">
                Quick Approval
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Most applications are processed within hours, not days. Get your money fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Apply?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Complete our simple application form and get your loan approved quickly.
          </p>
          <Link
            to="/apply"
            className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
          >
            Apply for a Loan
          </Link>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Can I repay early?</h3>
              <p className="text-gray-600">
                Yes! You can repay your loan at any time before the due date with no penalties.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Can I apply for a larger amount?</h3>
              <p className="text-gray-600">
                First-time borrowers start with smaller amounts. Repay on time to build your credit history and qualify for larger loans.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">What if I need help choosing?</h3>
              <p className="text-gray-600">
                Contact our support team via WhatsApp or email, and we'll help you select the right package.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/faqs"
              className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors text-lg"
            >
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
