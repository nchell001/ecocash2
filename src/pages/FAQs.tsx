import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: 'How long does loan approval take?',
      answer: 'Most applications are processed within 2-4 hours during business hours (Monday to Friday, 8am-5pm). Applications submitted outside business hours will be processed the next business day.',
    },
    {
      question: 'How do I receive the money?',
      answer: 'Once your loan is approved, the money is sent directly to your InnBucks wallet. You will receive an SMS notification confirming the transfer.',
    },
    {
      question: 'What happens if I repay late?',
      answer: 'Late repayment results in additional fees (5% of the loan amount per week overdue), negative impact on your credit history with us, and potential ineligibility for future loans. If you anticipate difficulty repaying, contact us immediately.',
    },
    {
      question: 'Can I apply again after repaying my loan?',
      answer: 'Yes! Once you have fully repaid your loan, you can apply again. Timely repayments help build your credit history with us and may qualify you for larger loan amounts.',
    },
    {
      question: 'Is my personal data safe?',
      answer: 'Absolutely. We take data security very seriously. Your personal information is encrypted and stored securely. We will never share your information with third parties without your consent, except as required by law.',
    },
    {
      question: 'Can I repay my loan early?',
      answer: 'Yes, you can repay your loan at any time before the due date. There are no penalties for early repayment.',
    },
    {
      question: 'What if I\'m a first-time borrower?',
      answer: 'First-time borrowers may initially qualify for smaller loan amounts. This helps us build trust and allows you to establish a repayment history. Repay on time to access larger amounts in the future.',
    },
    {
      question: 'Do I need a bank account?',
      answer: 'No, you don\'t need a bank account. All you need is an active InnBucks wallet to receive and repay the loan.',
    },
    {
      question: 'What are the eligibility requirements?',
      answer: 'You must be 18 years or older, have a valid Zimbabwe National ID, have an active InnBucks wallet, and provide accurate information. View our Eligibility page for more details.',
    },
    {
      question: 'Are there any hidden fees?',
      answer: 'No. The total repayment amount shown on our loan packages page includes all fees. There are no hidden charges, processing fees, or additional costs.',
    },
    {
      question: 'How much can I borrow?',
      answer: 'Our loan amounts range from $5 to $20. First-time borrowers typically start with smaller amounts and can access larger loans after building a good repayment history.',
    },
    {
      question: 'What if I have questions during the application process?',
      answer: 'You can contact our support team via WhatsApp or email at any time. We\'re here to help you through the process.',
    },
    {
      question: 'Is InnBucks Loans affiliated with InnBucks?',
      answer: 'No, InnBucks Loans is not affiliated with, endorsed by, or connected to InnBucks or Econet Wireless. We are an independent loan service that uses InnBucks as a payment method.',
    },
    {
      question: 'Can I have multiple loans at once?',
      answer: 'No, you can only have one active loan at a time. You must fully repay your current loan before applying for a new one.',
    },
    {
      question: 'What documents do I need to apply?',
      answer: 'You need your Zimbabwe National ID and an active InnBucks mobile number. That\'s it! No additional paperwork required.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-emerald-50 to-green-100 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Find answers to common questions about our loan service.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-lg text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 pt-2">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            If you couldn't find the answer you were looking for, our support team is here to help.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors font-semibold text-lg"
          >
            Contact Support
          </Link>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Apply?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Get your loan in just a few simple steps. Fast, secure, and transparent.
          </p>
          <Link
            to="/apply"
            className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
          >
            Apply for a Loan
          </Link>
        </div>
      </section>
    </div>
  );
}
