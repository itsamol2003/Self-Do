import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import road from "../../../project/Assets/road hero.jpg";
import car from "../../../project/Assets/Hero Car.png";
import text from "../../../project/Assets/Text Hero.png";
import TopNavbar from "../components/navigation/TopNavbar";
import Footer from "../components/navigation/Footer";

import brandStrip from "../../../project/Assets/LOGO Hero.png";
import { Search, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ add this

import { FaMapMarkerAlt, FaCalendarAlt, FaCarSide } from "react-icons/fa";
import speedIcon from "../../../project/Assets/Vector.png";
import fuelIcon from "../../../project/Assets/Vector (1).png";
import roadImg from "../../../project/Assets/Road.png";
import carImg from "../../../project/Assets/CarRed (2).png";

import blackCar from "../../../project/Assets/Black Car.png";
import whiteCar from "../../../project/Assets/White Car.png";
import blueCar from "../../../project/Assets/Blue Car.png";
import blackbmw from "../../../project/Assets/Black bmw.png";
import user1 from "../../../project/Assets/User1.png";
import user2 from "../../../project/Assets/User1.png";
import user3 from "../../../project/Assets/User1.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import phoneMockupCar from "../../../project/Assets/Mobile.jpg";
import googlePlay from "../../../project/Assets/Googlestor.png";
import appStore from "../../../project/Assets/AppStor.png";

// TOP: import stars
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

// Testimonials Data
const testimonials = [
  {
    name: "Marco Cornacchia",
    company: "Agarwal Hospitals",
    image: user1,
    rating: 4.5,
    feedback:
      "Absolutely stunning designs! Transformed my space beautifully with elegance. Highly recommend their expertise!",
  },
  {
    name: "Riya Mehta",
    company: "Creative Studios",
    image: user2,
    rating: 5,
    feedback:
      "Best car rental experience ever! Clean vehicles, easy booking, and friendly staff!",
  },
  {
    name: "Soham Kulkarni",
    company: "Phoenix Tech",
    image: user3,
    rating: 4,
    feedback:
      "Service was prompt and reliable. Would surely use again for weekend getaways.",
  },
  {
    name: "Soham Kulkarni",
    company: "Phoenix Tech",
    image: user3,
    rating: 4,
    feedback:
      "Service was prompt and reliable. Would surely use again for weekend getaways.",
  },
];

const cars = [
  {
    id: 1,
    image: blackCar,
    year: "2025",
    name: "Mercedes Black Coupe",
    price: "₹14,999",
    duration: "8 hours/80km",
  },
  {
    id: 2,
    image: whiteCar,
    year: "2025",
    name: "Mercedes White Coupe",
    price: "₹14,999",
    duration: "8 hours/80km",
  },
  {
    id: 3,
    image: blueCar,
    year: "2025",
    name: "BMW Blue Coupe",
    price: "₹14,999",
    duration: "8 hours/80km",
  },
  {
    id: 4,
    image: blackbmw,
    year: "2025",
    name: "Toyota Silver SUV",
    price: "₹14,999",
    duration: "8 hours/80km",
  },
];

const HomePage: React.FC = () => {
  const carRef = useRef<HTMLImageElement>(null);
  const howToCarRef = useRef<HTMLImageElement>(null);
  const navigate = useNavigate(); // ✅ this enables redirection

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroCar = carRef.current;
      const howToCar = howToCarRef.current;

      if (heroCar) {
        heroCar.style.transform = `translateY(${scrollY * 0.3}px)`;
      }

      if (howToCar) {
        howToCar.style.transform = `translateY(${scrollY * 0.03}px)`; // smooth scroll
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e1b2d] via-[#241d3e] to-[#1f1940] text-white">
      <TopNavbar />

      <div className="min-h-screen bg-white text-black">
        {/* Hero Section */}
        <header className="relative w-full min-h-screen bg-white overflow-hidden">
          <img
            src={road}
            alt="Road"
            className="absolute bottom-0 w-full h-[160px] sm:h-[220px] md:h-[280px] lg:h-[300px] object-cover z-0"
          />
          <img
            src={text}
            alt="Text"
            className="absolute top-[8%] left-[5%] w-[220px] sm:w-[300px] md:w-[400px] z-10"
          />
          <img
            ref={carRef}
            src={car}
            alt="Car"
            className="absolute bottom-[10px] right-[5%] w-[280px] sm:w-[480px] md:w-[600px] lg:w-[750px] xl:w-[850px] z-20 transition-transform duration-300 ease-out"
          />
        </header>

        {/* Logo Strip */}
        <div className="bg-black m-0 p-0 border-t border-gray-800 w-full">
          <img
            src={brandStrip}
            alt="Car brand logos"
            className="w-full h-auto block"
          />
        </div>

        {/* Unbeatable Rental Deals */}
        <div className="bg-[#f7f5f2] text-black px-4 sm:px-8 lg:px-20 py-10">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
            Unbeatable Rental Deals
          </h2>

          <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 mb-8">
            <select className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full sm:w-auto focus:outline-none">
              <option>Model</option>
            </select>
            <select className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full sm:w-auto focus:outline-none">
              <option>Location</option>
            </select>
            <input
              type="date"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full sm:w-auto focus:outline-none"
            />
            <button className="w-full sm:w-auto bg-white border border-orange-600 text-orange-600 px-4 py-2 rounded-md text-sm flex items-center justify-center gap-2 hover:bg-orange-50 transition">
              <Search size={16} />
              Search
            </button>

            {/* ✅ View All Button */}
            <button
              onClick={() => navigate("/view-all-car")}
              className="w-full sm:w-auto bg-orange-600 text-white px-4 py-2 rounded-md text-sm flex items-center justify-center gap-2 hover:bg-orange-700 transition"
            >
              <Eye size={16} />
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cars.map((car) => (
              <div
                key={car.id}
                onClick={() => navigate(`/Booking/${car.id}`)} // ✅ redirect to booking page
                className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-30 object-cover object-center rounded-t-xl"
                />
                <div className="bg-[#1C1C1C] text-white px-4 py-3">
                  <p className="text-[16px] font-light mb-1">{car.year}</p>
                  <h3 className="text-[24px] font-semibold font-serif leading-tight mb-3">
                    {car.name}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <p className="text-[28px] font-bold font-serif leading-snug tracking-tight">
                        {car.price}
                      </p>
                      <p className="text-sm text-gray-300">{car.duration}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <img
                        src={speedIcon}
                        alt="Speed Icon"
                        className="w-[40px] h-[40px]"
                      />
                      <img
                        src={fuelIcon}
                        alt="Fuel Icon"
                        className="w-[40px] h-[40px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
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

        {/* How to Book Section */}
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
              className="absolute bottom-[30%] left-1/43 -translate-x-1/2 z-10 w-[60%] sm:w-[50%] md:w-[45%] lg:w-[50%] transition-transform duration-700 ease-out"
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

        {/* Testimonials Section */}

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
                    const scroll =
                      document.getElementById("testimonial-scroll");
                    if (scroll)
                      scroll.scrollBy({ left: -400, behavior: "smooth" });
                  }}
                  className="text-[#1F1D1D] hover:text-[#F35B04] transition duration-200"
                >
                  <FaChevronLeft size={18} />
                </button>

                <button
                  onClick={() => {
                    const scroll =
                      document.getElementById("testimonial-scroll");
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

        <section className="w-full bg-white py-12 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between">
          {/* Left Text Section */}
          <div className="w-full md:w-1/2 px-4 md:px-8 lg:pl-20">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] leading-snug font-inter md:max-w-[500px]">
              Download <span className="font-bold">Self Do App</span>
              <br />
              for <span className="text-[#F15A29] font-extrabold">FREE</span>
            </h2>

            <p className="text-[#333333] text-base mt-6 leading-loose max-w-md font-normal">
              Self-drive gives you total freedom, privacy, and control over your
              journey. No waiting on drivers, no compromises — just you, the
              road, and your schedule. Explore at your pace with comfort and
              confidence.
            </p>

            <p className="text-[#F15A29] text-sm mt-4 font-medium">
              For faster, easier booking and exclusive deals.
            </p>

            <div className="flex gap-4 mt-6">
  <a
    href="https://play.google.com/store/apps" // Replace with actual app link if available
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={googlePlay}
      alt="Google Play"
      className="h-12 w-auto cursor-pointer"
    />
  </a>

  <a
    href="https://www.apple.com/in/app-store/" // Replace with actual app link if available
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={appStore}
      alt="App Store"
      className="h-12 w-auto cursor-pointer"
    />
  </a>
</div>

          </div>

          {/* Right Phone UI Image */}
          <div className="md:w-1/2 flex justify-end items-end">
            <img
              src={phoneMockupCar}
              alt="Mobile mockup with orange car"
              className="w-[300px] md:w-[360px] lg:w-[400px] xl:w-[450px] object-contain mt-[120px] self-end mb-[-48px]"
            />
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
