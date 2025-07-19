import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/navigation/TopNavbar";
import Footer from "../../components/navigation/Footer";
import MapPopup from "../../components/BookingPopup/map";
import ReturnLocationPopup from "../../components/BookingPopup/ReturnLocationPopup";
import AgreeAndContinuePopup from "../../components/BookingPopup/Agree & Continue";

import car1 from "../../../Assets/Black Car.png";
import car2 from "../../../Assets/White Car.png";
import car3 from "../../../Assets/Blue Car.png";
import carMain from "../../../Assets/Black bmw.png";

const carData: Record<number, {
  name: string;
  main: string;
  alt1: string;
  alt2: string;
}> = {
  1: { name: "Mercedes Black Coupe", main: car1, alt1: car2, alt2: car3 },
  2: { name: "Mercedes White Coupe", main: car2, alt1: car1, alt2: car3 },
  3: { name: "BMW Blue Coupe", main: car3, alt1: car1, alt2: car2 },
  4: { name: "Toyota Silver SUV", main: carMain, alt1: car1, alt2: car3 },
};

export default function BookingPage() {
  const { id } = useParams();
  const carId = Number(id);
  const car = carData[carId];
  const navigate = useNavigate();

  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isReturnPopupOpen, setIsReturnPopupOpen] = useState(false);
  const [isAgreePopupOpen, setIsAgreePopupOpen] = useState(false);

  const handleConfirmDeliveryLocation = () => {
    setIsMapOpen(false);
    setIsReturnPopupOpen(true);
  };

  const handleSameLocation = () => {
    setIsAgreePopupOpen(true);
  };

  const handleChooseDifferentLocation = () => {
    setIsReturnPopupOpen(false);
    setIsMapOpen(true);
  };

  const handleAgreeAndContinue = () => {
    setIsAgreePopupOpen(false);
    localStorage.setItem("selectedCar", JSON.stringify(car));
    navigate("/fare-details", { state: { car } });
  };

  if (!car) return <div className="text-center text-black py-20">Car not found</div>;

  return (
    <div className="min-h-[100dvh] flex flex-col bg-white text-black font-sans">
      <Header />

      <main className="flex-1 px-4 sm:px-6 py-6 overflow-y-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="flex-1">
            <div className="flex flex-col md:flex-row gap-6">
              <img src={car.main} alt="Main Car" className="w-full md:w-[600px] object-contain" />
              <div className="flex md:flex-col gap-4 justify-center items-center">
                <img src={car.alt1} alt="car alt 1" className="w-32 h-20 md:w-40 md:h-24 object-contain" />
                <img src={car.alt2} alt="car alt 2" className="w-32 h-20 md:w-40 md:h-24 object-contain" />
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold mt-8">{car.name}</h1>
            <p className="text-sm text-gray-600 mt-3 max-w-3xl leading-relaxed">
              The {car.name} is the perfect blend of style, performance, and comfort...
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-black">
              <div className="flex items-start gap-2"><span>✅</span><span className="font-semibold">Transmission:</span> <span className="text-gray-600">Automatic</span></div>
              <div className="flex items-start gap-2"><span>✅</span><span className="font-semibold">AC:</span> <span className="text-gray-600">Fully Automatic</span></div>
              <div className="flex items-start gap-2"><span>✅</span><span className="font-semibold">Fuel Type:</span> <span className="text-gray-600">Petrol</span></div>
              <div className="flex items-start gap-2"><span>✅</span><span className="font-semibold">Infotainment:</span> <span className="text-gray-600">Bluetooth, Android Auto</span></div>
              <div className="flex items-start gap-2"><span>✅</span><span className="font-semibold">Seating Capacity:</span> <span className="text-gray-600">5</span></div>
              <div className="flex items-start gap-2"><span>✅</span><span className="font-semibold">Safety:</span> <span className="text-gray-600">Airbags, ABS</span></div>
              <div className="flex items-start gap-2"><span>✅</span><span className="font-semibold">Mileage:</span> <span className="text-gray-600">16–18 km/l</span></div>
              <div className="flex items-start gap-2"><span>✅</span><span className="font-semibold">Boot Space:</span> <span className="text-gray-600">433 Litres</span></div>
            </div>
          </div>

          <div className="w-full md:w-80 space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Rental Details</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Security Deposit: ₹5,000</li>
                <li>• Free Km/Day: 120 km</li>
                <li>• Extra Km Charge: ₹10/km</li>
              </ul>
            </div>

            <div className="flex gap-3">
              <div className="border border-orange-500 text-orange-500 font-semibold px-4 py-2 rounded text-sm">
                ₹2,999 <span className="text-xs">/Day</span>
              </div>
              <div className="border px-4 py-2 rounded text-sm bg-white text-black">
                ₹54,000 <span className="text-xs">/mo</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-md text-black">
              <h4 className="text-sm mb-2 font-semibold">Fare Details</h4>
              <div className="text-xs text-gray-600">Total Price</div>
              <div className="text-2xl font-bold mb-2">₹3,118</div>

              <button
                className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition-all"
                onClick={() => setIsMapOpen(true)}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Explore More Section */}
        <div className="mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-8">Explore More Options</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[car1, car2, car3].map((image, index) => (
              <div key={index} className="rounded-2xl bg-[#f3f3f3] overflow-hidden shadow-md">
                <div className="bg-white p-4 flex justify-center items-center h-56">
                  <img src={image} alt={`Car ${index + 1}`} className="object-contain h-full" />
                </div>
                <div className="bg-[#1c1c1c] text-white px-5 py-4 rounded-b-2xl">
                  <div className="text-xs text-gray-400 mb-1">2025</div>
                  <div className="text-base font-semibold leading-snug mb-3">
                    Mercedes Benz Convertible Coupe
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div className="font-semibold text-lg">₹14,999</div>
                    <div className="flex items-center gap-4 text-gray-300">
                      <span>8 hours/80km</span>
                      <span className="text-orange-500 text-xl">✍️</span>
                      <span className="text-orange-500 text-xl">⛽</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popups */}
        <MapPopup show={isMapOpen} onClose={handleConfirmDeliveryLocation} />
        <ReturnLocationPopup
          show={isReturnPopupOpen}
          onClose={() => setIsReturnPopupOpen(false)}
          onSameLocation={handleSameLocation}
          onChooseDifferent={handleChooseDifferentLocation}
        />
        <AgreeAndContinuePopup
          show={isAgreePopupOpen}
          onClose={() => setIsAgreePopupOpen(false)}
          onConfirm={handleAgreeAndContinue}
        />
      </main>

      <Footer />
    </div>
  );
}
