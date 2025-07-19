import React from "react";
import Header from "../../components/navigation/TopNavbar";
import Footer from "../../components/navigation/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-10 text-black">
        <h2 className="text-4xl font-bold text-center mb-8">Privacy Policy</h2>

        <div className="space-y-6 bg-white p-6 rounded-md border border-gray-200 shadow-sm">
          <div>
            <h3 className="text-xl font-semibold mb-2">🔍 Data We Collect:</h3>
            <ul className="list-disc ml-5 space-y-1 text-gray-800">
              <li>Full Name, Email, Mobile Number, Address, ID Proof</li>
              <li>Valid Driving License details for verification</li>
              <li>Payment details (secured via trusted payment gateways)</li>
              <li>Location data (during vehicle use for safety & compliance)</li>
              <li>Device and browser information for analytics</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">⚙️ How We Use Your Data:</h3>
            <ul className="list-disc ml-5 space-y-1 text-gray-800">
              <li>To verify identity and driving eligibility</li>
              <li>To process bookings and payments securely</li>
              <li>To provide customer support and service updates</li>
              <li>To comply with legal and safety obligations</li>
              <li>To improve website functionality and user experience</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">🤝 Data Sharing:</h3>
            <ul className="list-disc ml-5 space-y-1 text-gray-800">
              <li>With trusted partners (payment gateways, insurance providers)</li>
              <li>With law enforcement or authorities if legally required</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">🔐 Your Rights:</h3>
            <ul className="list-disc ml-5 space-y-1 text-gray-800">
              <li>Request access, update, or deletion of your data anytime</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">🍪 Cookies:</h3>
            <ul className="list-disc ml-5 space-y-1 text-gray-800">
              <li>Used for site functionality and analytics</li>
              <li>Can be disabled in your browser settings</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">🔒 Security:</h3>
            <p className="text-gray-800">
              Strong safeguards in place to protect your personal data.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">📅 Policy Updates:</h3>
            <p className="text-gray-800">
              This policy may change; updates will reflect the new effective date.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
