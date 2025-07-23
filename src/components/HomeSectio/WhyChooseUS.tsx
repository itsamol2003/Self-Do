// src/components/HomeSectio/WhyChooseUs.tsx

import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-12 bg-white text-black">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
        Why Choose Us
      </h2>
      <p className="text-gray-600 max-w-3xl mb-10">
        Self-drive gives you total freedom, privacy, and control over your
        journey. No waiting on drivers, no compromises — just you, the road,
        and your schedule. Explore at your pace with comfort and confidence.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#f3ecea] rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-black mb-2">
            Wide Range of Cars
          </h3>
          <p className="text-gray-700 text-sm">
            From hatchbacks to SUVs and luxury sedans — we have the perfect
            car for every trip.
          </p>
        </div>
        <div className="bg-[#f3ecea] rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-black mb-2">
            Sanitized Vehicles
          </h3>
          <p className="text-gray-700 text-sm">
            Every vehicle is thoroughly inspected and cleaned before each
            ride to ensure safety and comfort.
          </p>
        </div>
        <div className="bg-[#f3ecea] rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-black mb-2">
            Instant Booking, No Hassles
          </h3>
          <p className="text-gray-700 text-sm">
            Book your ride in just a few clicks — no paperwork, no delays
            with 24/7 customer support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
