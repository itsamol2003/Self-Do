import React from "react";
import carImage from "../../../Assets/forchuner.png";
import Header from "../../components/navigation/TopNavbar";
import Footer from "../../components/navigation/Footer";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate

const FareDetailsPage = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate

  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-10 flex flex-col md:flex-row items-start gap-8">
        {/* Car Image */}
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src={carImage}
            alt="Fortuner"
            className="max-w-[400px] w-full object-contain"
          />
        </div>

        {/* Fare Details */}
        <div className="flex-1 w-full max-w-xl">
          <h2 className="text-lg font-semibold mb-4">Fare Details</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="font-medium text-gray-800">Car Model</span>
              <span className="text-gray-600">Hyundai Creta 2023 (Automatic)</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-800">Fuel Type</span>
              <span className="text-gray-600">Petrol</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-800">Dates</span>
              <span className="text-gray-600">July 1 – July 2, 2025</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-800">Rental Duration</span>
              <span className="text-gray-600">2 Days</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-800">Pickup Location</span>
              <span className="text-gray-600">Pune – Shivaji Nagar</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-800">Drop-off Location</span>
              <span className="text-gray-600">Pune – Same as pickup</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-800">Free Km per Day</span>
              <span className="text-gray-600">120 km</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-800">Extra Km Charges</span>
              <span className="text-gray-600">₹10/km</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-800">Security Deposit</span>
              <span className="text-gray-600">₹5,000 (Refundable)</span>
            </div>
          </div>

          {/* Bottom Card */}
          <div className="mt-10 border rounded-xl shadow-lg p-5">
            <h3 className="font-semibold mb-2">Fare Details</h3>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-600">Total Payable Now</span>
              <span className="text-2xl font-bold text-gray-800">₹6,998</span>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <button
                className="w-full border border-gray-400 py-2 rounded-md text-sm font-medium"
onClick={() => navigate("/payment-methods")}

              >
                Pay ₹2,000 Now
                <div className="text-xs text-gray-500">Balance on delivery</div>
              </button>
              <button
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md text-sm font-medium"
              onClick={() => navigate("/payment-methods")}

              >
                Pay ₹3,118
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FareDetailsPage;
