import { Mail, MessageCircle, Clock, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-emerald-50 to-green-100 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact & Support
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            We're here to help. Reach out to us anytime.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <a
              href="https://wa.me/263771234567"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-50 border-2 border-green-200 p-8 rounded-xl hover:border-green-400 transition-all hover:shadow-lg"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                WhatsApp Support
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Chat with us on WhatsApp for quick assistance. Our most popular support channel.
              </p>
              <span className="text-green-600 font-semibold text-lg">
                +263 77 123 4567
              </span>
            </a>

            <a
              href="mailto:support@ecoquick.co.zw"
              className="bg-blue-50 border-2 border-blue-200 p-8 rounded-xl hover:border-blue-400 transition-all hover:shadow-lg"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Email Support
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Send us an email and we'll respond within 24 hours during business days.
              </p>
              <span className="text-blue-600 font-semibold text-lg">
                support@ecoquick.co.zw
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Support Hours
              </h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM</p>
                <p><strong>Saturday:</strong> 9:00 AM - 1:00 PM</p>
                <p><strong>Sunday:</strong> Closed</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Location
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We operate digitally across Zimbabwe. Our services are available to anyone with a smartphone and InnBucks wallet.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              What Can We Help You With?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <span className="text-emerald-600 font-bold text-xl">•</span>
                <div>
                  <h4 className="font-semibold mb-1">Application Assistance</h4>
                  <p className="text-gray-600 text-sm">Help with filling out your loan application</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-emerald-600 font-bold text-xl">•</span>
                <div>
                  <h4 className="font-semibold mb-1">Loan Status Inquiries</h4>
                  <p className="text-gray-600 text-sm">Check the status of your application</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-emerald-600 font-bold text-xl">•</span>
                <div>
                  <h4 className="font-semibold mb-1">Repayment Questions</h4>
                  <p className="text-gray-600 text-sm">Assistance with making payments</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-emerald-600 font-bold text-xl">•</span>
                <div>
                  <h4 className="font-semibold mb-1">Technical Support</h4>
                  <p className="text-gray-600 text-sm">Help with website or payment issues</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-emerald-600 font-bold text-xl">•</span>
                <div>
                  <h4 className="font-semibold mb-1">General Inquiries</h4>
                  <p className="text-gray-600 text-sm">Questions about our services</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-emerald-600 font-bold text-xl">•</span>
                <div>
                  <h4 className="font-semibold mb-1">Payment Plans</h4>
                  <p className="text-gray-600 text-sm">Discuss repayment difficulties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Before You Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-center">
              Many questions can be answered quickly by checking these resources:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="/faqs"
                className="block bg-emerald-50 p-4 rounded-lg text-center hover:bg-emerald-100 transition-colors"
              >
                <h3 className="font-semibold text-emerald-600 mb-2">FAQs</h3>
                <p className="text-sm text-gray-600">Common questions answered</p>
              </a>
              <a
                href="/how-it-works"
                className="block bg-emerald-50 p-4 rounded-lg text-center hover:bg-emerald-100 transition-colors"
              >
                <h3 className="font-semibold text-emerald-600 mb-2">How It Works</h3>
                <p className="text-sm text-gray-600">Step-by-step guide</p>
              </a>
              <a
                href="/eligibility"
                className="block bg-emerald-50 p-4 rounded-lg text-center hover:bg-emerald-100 transition-colors"
              >
                <h3 className="font-semibold text-emerald-600 mb-2">Eligibility</h3>
                <p className="text-sm text-gray-600">Check if you qualify</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
            <h3 className="font-semibold text-amber-900 mb-2">Response Times</h3>
            <ul className="space-y-2 text-amber-800">
              <li>• WhatsApp: Usually within 1 hour during business hours</li>
              <li>• Email: Within 24 hours on business days</li>
              <li>• Messages sent outside business hours will be addressed the next business day</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
