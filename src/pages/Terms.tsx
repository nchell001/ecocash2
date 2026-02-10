export default function Terms() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Terms & Conditions
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Please read these terms carefully before using our service
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using InnBucks Loans services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, you must not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To use our loan services, you must:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Be at least 18 years of age</li>
                  <li>Be a resident of Zimbabwe</li>
                  <li>Have a valid Zimbabwe National ID</li>
                  <li>Have an active InnBucks wallet</li>
                  <li>Provide accurate and truthful information</li>
                  <li>Have the legal capacity to enter into a binding contract</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Loan Application and Approval</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>3.1 Application:</strong> Submitting a loan application does not guarantee approval. We reserve the right to approve or decline any application at our sole discretion.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>3.2 Verification:</strong> We will verify the information you provide. Providing false or misleading information may result in immediate rejection and may prevent you from applying in the future.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>3.3 Credit Assessment:</strong> We may conduct credit checks and assessments to determine your creditworthiness.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Loan Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>4.1 Loan Amounts:</strong> We offer loans ranging from $5 to $20 USD. First-time borrowers may be limited to smaller amounts.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>4.2 Repayment Periods:</strong> Loans must be repaid within 7 to 30 days, depending on the package selected.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>4.3 Service Fees:</strong> Service fees are clearly stated for each loan package and are included in the total repayment amount.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>4.4 No Hidden Charges:</strong> The total repayment amount shown at the time of application includes all fees. There are no additional or hidden charges.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Disbursement</h2>
                <p className="text-gray-700 leading-relaxed">
                  Upon approval, the loan amount will be disbursed directly to your registered InnBucks wallet. You are responsible for ensuring your InnBucks account is correct and active.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Repayment</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>6.1 Payment Method:</strong> Repayments must be made via InnBucks to the designated account provided in your loan agreement.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>6.2 Due Date:</strong> The full loan amount plus service fee must be repaid on or before the due date specified in your loan agreement.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>6.3 Early Repayment:</strong> You may repay your loan at any time before the due date without penalty.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>6.4 Late Payment:</strong> Failure to repay by the due date will result in late fees of 5% of the loan amount per week overdue. Continued non-payment may result in legal action.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Default and Collections</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you fail to repay your loan:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Late fees will continue to accrue</li>
                  <li>Your account will be marked as delinquent</li>
                  <li>You will be ineligible for future loans</li>
                  <li>We may report the default to credit reference bureaus</li>
                  <li>We reserve the right to pursue legal action for debt recovery</li>
                  <li>You will be responsible for all collection costs and legal fees</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. User Responsibilities</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Provide accurate and complete information</li>
                  <li>Update your information if it changes</li>
                  <li>Use the loan only for lawful purposes</li>
                  <li>Repay the loan on time</li>
                  <li>Notify us immediately of any payment difficulties</li>
                  <li>Keep your InnBucks account secure</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Prohibited Activities</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You must not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Provide false or misleading information</li>
                  <li>Apply for multiple loans simultaneously</li>
                  <li>Use another person's identity or information</li>
                  <li>Attempt to manipulate or exploit our system</li>
                  <li>Use the service for fraudulent purposes</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Disclaimer of Affiliation</h2>
                <p className="text-gray-700 leading-relaxed">
                  InnBucks Loans is <strong>not affiliated with, endorsed by, or connected to InnBucks or any related entities</strong>. We are an independent loan service provider that uses InnBucks as a payment method.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Not a Bank</h2>
                <p className="text-gray-700 leading-relaxed">
                  InnBucks Loans is not a registered bank or financial institution. We are a digital loan service provider. Loans are not deposits and are not covered by deposit insurance.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  To the fullest extent permitted by law, InnBucks Loans shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Modifications to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting. Your continued use of our services after changes constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms and Conditions are governed by the laws of Zimbabwe. Any disputes shall be resolved in the courts of Zimbabwe.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For questions about these Terms and Conditions, contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700"><strong>Email:</strong> support@innbucksloans.co.zw</p>
                  <p className="text-gray-700"><strong>WhatsApp:</strong> +263 77 123 4567</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <p className="text-amber-900 font-medium">
                <strong>Important:</strong> By submitting a loan application, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. You also confirm that all information provided is accurate and complete. Borrowing should be done responsibly. Only borrow what you can afford to repay.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
