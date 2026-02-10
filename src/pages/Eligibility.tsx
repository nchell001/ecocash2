import { Link } from 'react-router-dom';
import { CheckCircle, XCircle } from 'lucide-react';

export default function Eligibility() {
  const requirements = [
    {
      title: 'Age Requirement',
      description: 'You must be 18 years or older to apply for a loan.',
      required: true,
    },
    {
      title: 'Valid Zimbabwe National ID',
      description: 'You must have a valid Zimbabwe National ID card. We will verify your identity.',
      required: true,
    },
    {
      title: 'Active InnBucks Wallet',
      description: 'You must have an active InnBucks mobile wallet to receive and repay the loan.',
      required: true,
    },
    {
      title: 'Correct Information',
      description: 'All information provided in your application must be accurate and truthful.',
      required: true,
    },
  ];

  const additionalInfo = [
    {
      title: 'First-Time Borrowers',
      description: 'If this is your first loan with us, you may be eligible for smaller loan amounts initially. Build your repayment history to qualify for larger amounts.',
    },
    {
      title: 'Credit History',
      description: 'We may consider your previous loan repayment history. Timely repayments improve your eligibility for future loans.',
    },
    {
      title: 'Verification Process',
      description: 'All applications go through a verification process. This helps us ensure responsible lending and protect both you and us.',
    },
  ];

  const disqualifiers = [
    'Providing false or misleading information',
    'Having an outstanding unpaid loan with us',
    'Being under 18 years of age',
    'Not having a valid Zimbabwe National ID',
    'Not having an active InnBucks wallet',
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Eligibility Requirements
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Check if you qualify for an InnBucks Loans facility. Simple and straightforward criteria.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Basic Requirements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {requirements.map((req, index) => (
              <div key={index} className="bg-emerald-50 border border-emerald-200 p-6 rounded-lg">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">
                      {req.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {req.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Additional Information
          </h2>
          <div className="space-y-6 mb-12">
            {additionalInfo.map((info, index) => (
              <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-3 text-emerald-600">
                  {info.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {info.description}
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            What Can Disqualify You?
          </h2>
          <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-12">
            <ul className="space-y-3">
              {disqualifiers.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <h3 className="font-semibold text-blue-900 mb-2">Important Note</h3>
            <p className="text-blue-800 leading-relaxed">
              Meeting these requirements does not guarantee loan approval. All applications are subject to verification and our lending criteria. We reserve the right to approve or decline any application at our discretion.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Do You Meet the Requirements?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              If you meet all the eligibility criteria above, you're ready to apply for your loan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/apply"
                className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-light transition-colors font-semibold text-lg"
              >
                Apply Now
              </Link>
              <Link
                to="/faqs"
                className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg border-2 border-emerald-600"
              >
                View FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Have Questions?
          </h2>
          <p className="text-center text-gray-700 leading-relaxed mb-8">
            If you're unsure about your eligibility or have questions about the requirements, our support team is here to help.
          </p>
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-block text-emerald-600 font-semibold hover:text-emerald-700 transition-colors text-lg"
            >
              Contact Support →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
