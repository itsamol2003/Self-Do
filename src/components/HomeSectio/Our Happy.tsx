import React from "react";
import { FaChevronLeft, FaChevronRight, FaStar, FaStarHalfAlt } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    company: "Acme Inc.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 4.5,
    feedback: "Great service! Very professional and efficient."
  },
  {
    name: "Jane Smith",
    company: "Globex Corp.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    feedback: "Absolutely loved the experience. Highly recommended!"
  },
  {
    name: "John Doe",
    company: "Acme Inc.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 4.5,
    feedback: "Great service! Very professional and efficient."
  },
  {
    name: "Jane Smith",
    company: "Globex Corp.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    feedback: "Absolutely loved the experience. Highly recommended!"
  },
  // Add more testimonials as needed
];

const OurHappy = () => {
  return (
    <div className="bg-[#fff3ee] text-black px-6 md:px-12 py-12">
      {/* HEADER + ARROWS */}
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-[30px] md:text-[42px] font-bold font-serif text-[#1f1d1d]">
          Our Happy Customers
        </h2>

        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            <button
              onClick={() => {
                const scroll = document.getElementById("testimonial-scroll");
                if (scroll)
                  scroll.scrollBy({ left: -400, behavior: "smooth" });
              }}
              className="text-[#1F1D1D] hover:text-[#F35B04] transition duration-200"
            >
              <FaChevronLeft size={18} />
            </button>

            <button
              onClick={() => {
                const scroll = document.getElementById("testimonial-scroll");
                if (scroll)
                  scroll.scrollBy({ left: 400, behavior: "smooth" });
              }}
              className="text-[#1F1D1D] hover:text-[#F35B04] transition duration-200"
            >
              <FaChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* SLIDER */}
      <div
        id="testimonial-scroll"
        className="flex gap-6 overflow-x-auto scroll-smooth hide-scrollbar"
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-[#1c1c1c] rounded-xl shadow-md p-6 w-[320px] md:w-[380px] flex-shrink-0"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-md font-semibold text-white">
                  {item.name}
                </h3>
                <p className="text-sm text-white">{item.company}</p>
              </div>

              <div className="ml-auto flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star, i) => {
                  if (item.rating >= star) {
                    return (
                      <FaStar key={i} className="text-white text-sm" />
                    );
                  } else if (item.rating >= star - 0.5) {
                    return (
                      <FaStarHalfAlt
                        key={i}
                        className="text-white text-sm"
                      />
                    );
                  } else {
                    return (
                      <FaStar key={i} className="text-gray-600 text-sm" />
                    );
                  }
                })}
              </div>
            </div>
            <p className="text-sm text-gray-300">{item.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurHappy;