import React, { useState } from "react";
import TopNavbar from "../../components/navigation/TopNavbar";
import Footer from "../../components/navigation/Footer";
import { useNavigate } from "react-router-dom";

import DebitIcon from "../../../Assets/Debit card.png";
import GPayIcon from "../../../Assets/GooglePay.png";
import PhonePeIcon from "../../../Assets/PhonePay (2).png";

import GpayQR from "../../../Assets/Scnner.png";
import PhonePeQR from "../../../Assets/Scnner.png";

export default function PaymentPage() {
  const [method, setMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const navigate = useNavigate();

  const selectedCar = {
    name: "Hyundai Creta 2023 (Automatic)",
    fuel: "Petrol",
    image: "https://i.ibb.co/qsFxY06/creta-black.png",
  };

  const bookingData = {
    id: Date.now(),
    vehicle: {
      name: selectedCar.name,
      images: [selectedCar.image],
      type: selectedCar.fuel,
      rating: 4.5,
      reviewCount: 132,
    },
    pickupDate: "July 1, 2025",
    returnDate: "July 2, 2025",
    pickupLocation: "Pune – Shivaji Nagar",
    returnLocation: "Same as pickup",
    paymentStatus: "Paid",
    price: 6998,
  };

  const handlePayment = () => {
    if (method === "card") {
      if (!/^\d{12,16}$/.test(cardNumber)) {
        alert("Please enter a valid card number (12 to 16 digits only).");
        return;
      }
      if (!name.trim()) {
        alert("Please enter the name on the card.");
        return;
      }
      if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
        alert("Please enter expiry in MM/YY format with valid month (01–12).");
        return;
      }
      if (!/^\d{3}$/.test(cvv)) {
        alert("Please enter a valid 3-digit CVV.");
        return;
      }
    }

    navigate("/booking-confirmation", { state: { booking: bookingData } });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans">
      <TopNavbar />

      <div className="flex-1 p-4 md:p-10 flex justify-center items-start">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Payment Options */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Select Payment Options
            </h2>

            <div className="flex flex-wrap gap-4 mt-4 justify-start">
              {[
                { id: "card", icon: DebitIcon, alt: "Debit Card" },
                { id: "gpay", icon: GPayIcon, alt: "Google Pay" },
                { id: "phonepe", icon: PhonePeIcon, alt: "PhonePe" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setMethod(item.id)}
                  className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full border-4 transition-all duration-200 shadow ${
                    method === item.id
                      ? "border-[#FF6400] scale-105"
                      : "border-gray-300"
                  } ${item.id === "card" ? "bg-black" : "bg-white"}`}
                >
                  <img
                    src={item.icon}
                    alt={item.alt}
                    className="object-contain w-6 h-6 md:w-8 md:h-8"
                  />
                </button>
              ))}
            </div>

            {/* Payment Forms */}
            {method === "card" && (
              <div className="space-y-4 mt-6">
                <input
                  type="text"
                  placeholder="Card Number (12–16 digits)"
                  value={cardNumber}
                  onChange={(e) =>
                    setCardNumber(e.target.value.replace(/\D/g, ""))
                  }
                  className="w-full border border-gray-300 px-4 py-2 rounded-md"
                  inputMode="numeric"
                  maxLength={16}
                />
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 px-4 py-2 rounded-md"
                />
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={(e) => {
                      let input = e.target.value;
                      input = input.replace(/[^\d/]/g, "");
                      if (input.length === 2 && !input.includes("/")) {
                        input = input + "/";
                      }
                      if (input.length > 5) return;
                      setExpiry(input);
                    }}
                    className="w-full border border-gray-300 px-4 py-2 rounded-md"
                    maxLength={5}
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
                    className="w-full border border-gray-300 px-4 py-2 rounded-md"
                    inputMode="numeric"
                    maxLength={3}
                  />
                </div>
                <button
                  onClick={handlePayment}
                  className="w-full bg-[#FF6400] text-white py-3 rounded-md font-semibold"
                >
                  Pay ₹6,998
                </button>
              </div>
            )}

            {(method === "gpay" || method === "phonepe") && (
              <div className="p-4 mt-6 border rounded-md text-center">
                <img
                  src={method === "gpay" ? GpayQR : PhonePeQR}
                  alt="QR Code"
                  className="mx-auto w-60 h-60"
                />
                <button
                  onClick={handlePayment}
                  className="mt-4 bg-[#FF6400] text-white px-6 py-2 rounded-md"
                >
                  Confirm Payment
                </button>
              </div>
            )}
          </div>

          {/* Right: Fare Details */}
          <div className="text-sm text-black/80 space-y-2">
            <h3 className="text-black text-base font-semibold mb-2">
              Fare Details
            </h3>
            <div className="flex justify-between">
              <span>Car Model</span>
              <span className="text-black">{selectedCar.name}</span>
            </div>
            <div className="flex justify-between">
              <span>Fuel Type</span>
              <span className="text-black">{selectedCar.fuel}</span>
            </div>
            <div className="flex justify-between">
              <span>Dates</span>
              <span className="text-black">July 1 – July 2, 2025</span>
            </div>
            <div className="flex justify-between">
              <span>Rental Duration</span>
              <span className="text-black">2 Days</span>
            </div>
            <div className="flex justify-between">
              <span>Pickup Location</span>
              <span className="text-black">Pune – Shivaji Nagar</span>
            </div>
            <div className="flex justify-between">
              <span>Drop-off Location</span>
              <span className="text-black">Same as pickup</span>
            </div>
            <div className="flex justify-between">
              <span>Free Km per Day</span>
              <span className="text-black">120 km</span>
            </div>
            <div className="flex justify-between">
              <span>Extra Km Charges</span>
              <span className="text-black">₹10/km</span>
            </div>
            <div className="flex justify-between">
              <span>Security Deposit</span>
              <span className="text-black">₹5,000 (Refundable)</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
