import { Link } from 'react-router-dom';
import { Shield, Smartphone, Zap, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Fast InnBucks Loans (QUICK APPROVAL)
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Apply from your phone. Get money sent straight to your InnBucks wallet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/apply"
                className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-light transition-colors font-semibold text-lg w-full sm:w-auto text-center"
              >
                Apply Now
              </Link>
              <Link
                to="/loan-packages"
                className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg border-2 border-primary w-full sm:w-auto text-center"
              >
                View Loan Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure</h3>
              <p className="text-gray-600 leading-relaxed">
                Your personal information is protected and handled with the highest security standards.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Transparent Fees</h3>
              <p className="text-gray-600 leading-relaxed">
                No hidden charges. You know exactly what you'll repay before you apply.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mobile Friendly</h3>
              <p className="text-gray-600 leading-relaxed">
                Apply from any phone, anywhere in Zimbabwe. Fast and easy process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Get your loan in 5 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {[
              { step: '1', title: 'Choose Loan', desc: 'Select the amount you need' },
              { step: '2', title: 'Apply Online', desc: 'Fill out our simple form' },
              { step: '3', title: 'Verification', desc: 'We verify your details' },
              { step: '4', title: 'Get Money', desc: 'Receive via InnBucks' },
              { step: '5', title: 'Repay', desc: 'Pay back on time' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                  {item.step}
                </div>
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="text-primary font-semibold hover:text-primary-light transition-colors text-lg"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose InnBucks Loans?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              'Fast approval process',
              'Direct to InnBucks wallet',
              'No hidden fees',
              'Flexible repayment periods',
              'Available 24/7',
              'Simple eligibility criteria',
            ].map((feature) => (
              <div key={feature} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
          <Link
            to="/apply"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg mt-10"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
            <p className="text-amber-900 font-medium">
              <strong>Important:</strong> This is a short-term digital loan service. Borrow responsibly. We are not affiliated with InnBucks or Econet Wireless.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
