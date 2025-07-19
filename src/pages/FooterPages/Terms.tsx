import React from "react";
import Header from "../../components/navigation/TopNavbar";
import Footer from "../../components/navigation/Footer";

const Terms = () => {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-10 text-black">
        <h2 className="text-4xl font-bold text-center mb-8">Terms & Conditions</h2>

        <div className="space-y-6 bg-white p-6 rounded-md border border-gray-200 shadow-sm">

          <div>
            <h3 className="text-xl font-semibold mb-2">📌 Eligibility:</h3>
            <ul className="list-disc ml-5 space-y-1 text-gray-800">
              <li>Users must be 21+ years old with a valid Indian driving license</li>
              <li>ID and license verification is mandatory before booking</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">🚗 Booking & Usage:</h3>
            <ul className="list-disc ml-5 space-y-1 text-gray-800">
              <li>Travel allowed within Pune and up to 10 km surrounding areas</li>
              <li>Booking time runs from pick-up to drop-off</li>
              <li>Late returns may incur extra charges</li>
              <li>User responsible for fuel, tolls, parking, and fines</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">🛠️ Vehicle Condition:</h3>
            <ul className="list-disc ml-5 space-y-1 text-gray-800">
              <li>Vehicles provided clean and roadworthy</li>
              <li>Return in same condition; user liable for damages or cleaning fees</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">💳 Payments & Cancellations:</h3>
            <ul className="list-disc ml-5 space-y-1 text-gray-800">
              <li>Full payment required at booking</li>
              <li>Cancellations within 2 hours of pick-up may attract a [X]% fee</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">⛔ Prohibited Uses:</h3>
            <ul className="list-disc ml-5 space-y-1 text-gray-800">
              <li>No unauthorized drivers or illegal activities</li>
              <li>No smoking or alcohol consumption inside vehicles</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">🧾 Liability:</h3>
            <ul className="list-disc ml-5 space-y-1 text-gray-800">
              <li>Not responsible for personal belongings left in vehicles</li>
              <li>Insurance applies per policy; user negligence may result in charges</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">❌ Termination of Service:</h3>
            <p className="text-gray-800">
              Service may be refused or terminated for any policy violations
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">⚖️ Governing Law:</h3>
            <p className="text-gray-800">
              Subject to Indian laws and Pune jurisdiction for disputes
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="/assets/terms-and-conditions.pdf"
            download
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
          >
            📄 Download Full Terms
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
