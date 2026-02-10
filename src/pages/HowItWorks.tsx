import { Link } from 'react-router-dom';
import { Package, FileText, CheckCircle, Wallet, RefreshCcw } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Package,
      title: 'Choose a Loan Package',
      description: 'Browse our available loan packages and select the amount and repayment period that works best for you. Packages range from $5 to $20 with flexible repayment terms of 7 to 30 days.',
    },
    {
      icon: FileText,
      title: 'Apply Online Using Your Phone',
      description: 'Fill out our simple application form on your mobile phone. You\'ll need your National ID, InnBucks number, and basic personal information. The form takes just a few minutes to complete.',
    },
    {
      icon: CheckCircle,
      title: 'Verification Process',
      description: 'Our team will verify your details and assess your application. This usually takes a few hours during business hours. We\'ll notify you via SMS once your application has been reviewed.',
    },
    {
      icon: Wallet,
      title: 'Receive Money via InnBucks',
      description: 'Once approved, the loan amount will be sent directly to your InnBucks wallet. You\'ll receive a confirmation message and can start using the funds immediately.',
    },
    {
      icon: RefreshCcw,
      title: 'Repay on Time Using InnBucks',
      description: 'Repay your loan before the due date using InnBucks. You can repay in full at any time. Timely repayment helps you build a good credit history for future loans.',
    },
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-emerald-50 to-green-100 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Getting your InnBucks loan is simple and fast. Follow these 5 easy steps to get the money you need.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <step.icon className="h-7 w-7 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Important Information
            </h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start space-x-3">
                <span className="text-emerald-600 font-bold text-xl">•</span>
                <p className="leading-relaxed">
                  <strong>Processing Time:</strong> Applications are typically processed within 2-4 hours during business hours (Monday-Friday, 8am-5pm).
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-emerald-600 font-bold text-xl">•</span>
                <p className="leading-relaxed">
                  <strong>Approval:</strong> Loan approval is subject to verification and eligibility criteria. Not all applications are approved.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-emerald-600 font-bold text-xl">•</span>
                <p className="leading-relaxed">
                  <strong>First-Time Borrowers:</strong> If this is your first loan with us, you may be eligible for smaller amounts initially. Build your credit history to access larger loans.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-emerald-600 font-bold text-xl">•</span>
                <p className="leading-relaxed">
                  <strong>Transparency:</strong> All fees are clearly shown before you apply. There are no hidden charges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            View our loan packages and apply today. Fast, simple, and secure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/loan-packages"
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              View Loan Packages
            </Link>
            <Link
              to="/apply"
              className="bg-emerald-700 text-white px-8 py-4 rounded-lg hover:bg-emerald-800 transition-colors font-semibold text-lg border-2 border-white"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
