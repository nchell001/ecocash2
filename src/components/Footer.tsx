import { Link } from 'react-router-dom';
import { Smartphone, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Smartphone className="h-8 w-8 text-emerald-500" />
              <span className="text-xl font-bold text-white">
                InnBucks Loans
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Fast, transparent short-term loans for Zimbabweans. Get money sent straight to your InnBucks wallet.
            </p>
            <p className="text-xs text-gray-400">
              This is a short-term digital loan service. Borrow responsibly. We are not affiliated with InnBucks or Econet Wireless.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/how-it-works" className="hover:text-emerald-500 transition-colors">How It Works</Link></li>
              <li><Link to="/loan-packages" className="hover:text-emerald-500 transition-colors">Loan Packages</Link></li>
              <li><Link to="/eligibility" className="hover:text-emerald-500 transition-colors">Eligibility</Link></li>
              <li><Link to="/repayment" className="hover:text-emerald-500 transition-colors">Repayment & Fees</Link></li>
              <li><Link to="/about" className="hover:text-emerald-500 transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faqs" className="hover:text-emerald-500 transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-500 transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-emerald-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-emerald-500 transition-colors">Terms & Conditions</Link></li>
            </ul>
            <div className="mt-6 space-y-2">
              <a href="mailto:support@innbucksloans.co.zw" className="flex items-center space-x-2 text-sm hover:text-emerald-500 transition-colors">
                <Mail className="h-4 w-4" />
                <span>support@innbucksloans.co.zw</span>
              </a>
              <a href="https://wa.me/263771234567" className="flex items-center space-x-2 text-sm hover:text-emerald-500 transition-colors">
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Support</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} InnBucks Loans. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
