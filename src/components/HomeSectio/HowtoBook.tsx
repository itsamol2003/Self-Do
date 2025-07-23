import React, { useRef } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaCarSide } from "react-icons/fa";
import roadImg from "../../../Assets/Road.png";
import carImg from "../../../Assets/CarRed (2).png";

const HowToBook = () => {
  const howToCarRef = useRef(null);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-[#fff3ee] px-4 sm:px-8 md:px-16 py-12">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mb-10 lg:mb-0 relative flex items-center justify-center">
        <img
          src={roadImg}
          alt="Road"
          className="w-full h-auto object-contain z-0"
        />
        <img
          ref={howToCarRef}
          src={carImg}
          alt="Car"
          className="absolute bottom-[30%] left-1/2 -translate-x-1/2 z-10 w-[60%] sm:w-[50%] md:w-[45%] lg:w-[50%] transition-transform duration-700 ease-out"
        />
      </div>

      <div className="w-full max-w-lg lg:pl-12 text-black">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
          How to Book a Car Rental ?
        </h2>
        <div className="space-y-5 mb-6">
          <div className="flex items-start gap-4">
            <div className="bg-[#ffe3d3] p-3 rounded">
              <FaMapMarkerAlt className="text-[#f97227] text-xl" />
            </div>
            <div>
              <h4 className="font-semibold text-base">Choose location</h4>
              <p className="text-sm text-gray-600">
                Choose your and find your best car
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-[#ffe3d3] p-3 rounded">
              <FaCalendarAlt className="text-[#f97227] text-xl" />
            </div>
            <div>
              <h4 className="font-semibold text-base">Pick up Date</h4>
              <p className="text-sm text-gray-600">
                Select your pick up date and time to book your car
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-[#ffe3d3] p-3 rounded">
              <FaCarSide className="text-[#f97227] text-xl" />
            </div>
            <div>
              <h4 className="font-semibold text-base">Book Your Car</h4>
              <p className="text-sm text-gray-600">
                Book your car and we will deliver it directly to you
              </p>
            </div>
          </div>
        </div>
        <button className="bg-[#f97227] hover:bg-[#e86115] text-white text-sm px-6 py-2 rounded-full">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HowToBook;