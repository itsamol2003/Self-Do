import React, { useState } from "react";
import TopNavbar from "../../components/navigation/TopNavbar";
import Footer from "../../components/navigation/Footer";
import { useNavigate } from "react-router-dom";

import DebitIcon from "../../../Assets/Debit.png";
import GPayIcon from "../../../Assets/GooglePay.png";
import PhonePeIcon from "../../../Assets/PhonePay.png";

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
      // Card Number: Only digits, between 12 to 16 digits
      if (!/^\d{12,16}$/.test(cardNumber)) {
        alert("Please enter a valid card number (12 to 16 digits only).");
        return;
      }

      // Name: Required
      if (!name.trim()) {
        alert("Please enter the name on the card.");
        return;
      }

      // Expiry: MM/YY format (MM = 01-12)
      if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
        alert("Please enter expiry in MM/YY format with valid month (01–12).");
        return;
      }

      // CVV: Exactly 3 digits
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
            <h2 className="text-2xl font-semibold mb-4">Select Payment Options</h2>

            <div className="flex gap-3 mb-6">
              {["card", "gpay", "phonepe"].map((m) => (
                <button
                  key={m}
                  onClick={() => setMethod(m)}
                  className={`flex items-center gap-2 px-5 py-2 rounded-md border ${
                    method === m ? "bg-[#FF6400] text-white" : "border-gray-300"
                  }`}
                >
                  <img
                    src={
                      m === "card"
                        ? DebitIcon
                        : m === "gpay"
                        ? GPayIcon
                        : PhonePeIcon
                    }
                    alt={m}
                    className="w-10 h-10 bg-white rounded-md p-1 border border-gray-300 shadow"
                  />
                </button>
              ))}
            </div>

            {/* Payment Forms */}
            {method === "card" && (
              <div className="space-y-4">
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
                    onChange={(e) =>
                      setCvv(e.target.value.replace(/\D/g, ""))
                    }
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
              <div className="p-4 border rounded-md text-center">
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
            <h3 className="text-black text-base font-semibold mb-2">Fare Details</h3>
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