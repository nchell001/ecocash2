import { Link } from 'react-router-dom';
import { Smartphone, Calendar, AlertTriangle, DollarSign } from 'lucide-react';

export default function Repayment() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-emerald-50 to-green-100 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Repayment & Fees
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Transparent pricing with no hidden charges. Know exactly what you'll pay.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            How to Repay
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-emerald-50 p-6 rounded-lg text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Via InnBucks</h3>
              <p className="text-gray-700 leading-relaxed">
                Repay directly using your InnBucks wallet. Simple and secure.
              </p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Before Due Date</h3>
              <p className="text-gray-700 leading-relaxed">
                Repay on or before your due date to avoid late fees.
              </p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Full or Partial</h3>
              <p className="text-gray-700 leading-relaxed">
                Repay in full at any time or make partial payments if needed.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-md mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Repayment Instructions
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Open InnBucks Menu</h4>
                  <p className="text-gray-700">Dial the InnBucks USSD code on your mobile phone to access InnBucks.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Select 'Send Money'</h4>
                  <p className="text-gray-700">Choose the option to send money to another InnBucks account.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Enter Our InnBucks Account</h4>
                  <p className="text-gray-700">Send the repayment amount to our InnBucks account details provided in your loan agreement.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Confirm Payment</h4>
                  <p className="text-gray-700">Enter your InnBucks PIN to complete the transaction.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Fee Structure
          </h2>
          <div className="overflow-x-auto mb-12">
            <table className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-emerald-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Loan Amount</th>
                  <th className="px-6 py-4 text-left font-semibold">Service Fee</th>
                  <th className="px-6 py-4 text-left font-semibold">Total Repayment</th>
                  <th className="px-6 py-4 text-left font-semibold">Period</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4">$5</td>
                  <td className="px-6 py-4">$1</td>
                  <td className="px-6 py-4 font-semibold">$6</td>
                  <td className="px-6 py-4">7 days</td>
                </tr>
                <tr className="border-b border-gray-200 bg-emerald-50">
                  <td className="px-6 py-4">$10</td>
                  <td className="px-6 py-4">$2</td>
                  <td className="px-6 py-4 font-semibold">$12</td>
                  <td className="px-6 py-4">14 days</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4">$15</td>
                  <td className="px-6 py-4">$3</td>
                  <td className="px-6 py-4 font-semibold">$18</td>
                  <td className="px-6 py-4">21 days</td>
                </tr>
                <tr className="bg-emerald-50">
                  <td className="px-6 py-4">$20</td>
                  <td className="px-6 py-4">$5</td>
                  <td className="px-6 py-4 font-semibold">$25</td>
                  <td className="px-6 py-4">30 days</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-12">
            <h3 className="font-semibold text-green-900 mb-2 text-xl">
              No Hidden Charges
            </h3>
            <p className="text-green-800 leading-relaxed">
              The amounts shown above are the <strong>only</strong> charges you will pay. There are no hidden fees, no processing charges, and no additional costs. What you see is what you pay.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Late Repayment
          </h2>
          <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-8">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-xl mb-3 text-red-900">
                  Consequences of Late Payment
                </h3>
                <ul className="space-y-2 text-red-800">
                  <li>• Late payment fees will be applied (5% of loan amount per week overdue)</li>
                  <li>• Your credit history with us will be negatively affected</li>
                  <li>• You may be ineligible for future loans</li>
                  <li>• We may take legal action to recover the debt</li>
                  <li>• Your information may be shared with credit bureaus</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Need Help?</h3>
            <p className="text-blue-800 leading-relaxed">
              If you're having difficulty making a repayment, <strong>contact us immediately</strong>. We may be able to work out a payment plan with you. Don't wait until you're already late.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Build Your Credit History
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Repay your loans on time to build a positive credit history with us. This will help you access larger loan amounts and better terms in the future.
            </p>
            <Link
              to="/apply"
              className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors font-semibold text-lg"
            >
              Apply for a Loan
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
