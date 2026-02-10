import { Link } from 'react-router-dom';
import { Heart, Shield, Users, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About InnBucks Loans
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Financial inclusion for every Zimbabwean. Simple, transparent, and fair.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              InnBucks Loans was created to provide fast, accessible, and transparent short-term financial solutions to Zimbabweans. We believe that everyone deserves access to fair financial services, especially during times of unexpected need.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              By leveraging mobile technology and InnBucks, we make it easy for anyone with a smartphone to access small loans quickly and securely. No long bank queues, no complicated paperwork, just simple and straightforward lending.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-emerald-50 p-8 rounded-xl">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be Zimbabwe's most trusted and accessible short-term loan provider, helping people bridge financial gaps with dignity and transparency.
              </p>
            </div>

            <div className="bg-emerald-50 p-8 rounded-xl">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Values</h3>
              <p className="text-gray-700 leading-relaxed">
                Transparency, fairness, and respect guide everything we do. We treat our customers the way we would want to be treated.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Transparent</h3>
                <p className="text-gray-600 leading-relaxed">
                  No hidden fees or surprise charges. You always know exactly what you'll repay.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Community-Focused</h3>
                <p className="text-gray-600 leading-relaxed">
                  We're here to help Zimbabweans, not to take advantage. Fair lending is our promise.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer-First</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your satisfaction and financial wellbeing matter to us. We're here to support you.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-12">
            <h3 className="font-semibold text-amber-900 mb-2">Important Disclaimer</h3>
            <p className="text-amber-800 leading-relaxed">
              InnBucks Loans is an independent digital loan service. We are <strong>not affiliated with, endorsed by, or connected to InnBucks or Econet Wireless</strong>. We simply use InnBucks as a payment method for the convenience of our customers.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 className="font-semibold text-blue-900 mb-2">We Are Not a Bank</h3>
            <p className="text-blue-800 leading-relaxed">
              InnBucks Loans is not a registered bank or financial institution. We are a digital loan service provider offering short-term loans. All loans are subject to our terms and conditions and lending criteria.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Join thousands of Zimbabweans who trust us for their short-term loan needs.
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
