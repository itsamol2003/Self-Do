import React, { useState } from "react";
import Header from "../../components/navigation/TopNavbar";
import Footer from "../../components/navigation/Footer";
import { Link } from "react-router-dom";
import { FiFilter } from "react-icons/fi";

import car1 from "../../../Assets/Black Car.png";
import car2 from "../../../Assets/Blue Car.png";
import car3 from "../../../Assets/Black bmw.png";
import car4 from "../../../Assets/White Car.png";
import car5 from "../../../Assets/Black Car.png";
import car6 from "../../../Assets/Blue Car.png";

export default function CarListingPage() {
  const allCars = [
    {
      id: 1,
      title: "Mercedes Benz Convertible Coupe",
      year: "2025",
      price: 14999,
      img: car1,
      fuel: "Petrol",
      location: "Mumbai",
      brand: "Mercedes Benz",
      segment: "Sedan",
      seating: "4 Seater",
    },
    {
      id: 2,
      title: "Tata Nexon EV",
      year: "2024",
      price: 7999,
      img: car2,
      fuel: "Electric",
      location: "Pune",
      brand: "Tata",
      segment: "SUV",
      seating: "5 Seater",
    },
    {
      id: 3,
      title: "Hyundai Creta",
      year: "2023",
      price: 8499,
      img: car3,
      fuel: "Diesel",
      location: "Bangalore",
      brand: "Hyundai",
      segment: "SUV",
      seating: "5 Seater",
    },
    {
      id: 4,
      title: "Honda City Hybrid",
      year: "2023",
      price: 9499,
      img: car4,
      fuel: "Hybrid",
      location: "Hyderabad",
      brand: "Honda",
      segment: "Sedan",
      seating: "5 Seater",
    },
    {
      id: 5,
      title: "Mahindra Thar",
      year: "2022",
      price: 10499,
      img: car5,
      fuel: "Diesel",
      location: "Chennai",
      brand: "Mahindra",
      segment: "SUV",
      seating: "4 Seater",
    },
    {
      id: 6,
      title: "Maruti Suzuki Ertiga",
      year: "2024",
      price: 6999,
      img: car6,
      fuel: "Petrol",
      location: "Delhi",
      brand: "Maruti",
      segment: "MUV",
      seating: "7 Seater",
    },
  ];

  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedFuel, setSelectedFuel] = useState([]);
  const [selectedSegment, setSelectedSegment] = useState([]);
  const [selectedSeating, setSelectedSeating] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [filteredCars, setFilteredCars] = useState(allCars);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const applyFilters = () => {
    let result = [...allCars];
    if (location)
      result = result.filter((car) =>
        car.location.toLowerCase().includes(location.toLowerCase())
      );
    if (selectedBrands.length > 0)
      result = result.filter((car) => selectedBrands.includes(car.brand));
    if (selectedFuel.length > 0)
      result = result.filter((car) => selectedFuel.includes(car.fuel));
    if (selectedSegment.length > 0)
      result = result.filter((car) => selectedSegment.includes(car.segment));
    if (selectedSeating.length > 0)
      result = result.filter((car) => selectedSeating.includes(car.seating));
    if (selectedPrice.length > 0) {
      result = result.filter((car) =>
        selectedPrice.some((range) => {
          if (range === "Below ₹1,000") return car.price < 1000;
          if (range === "₹1,000 - ₹2,000")
            return car.price >= 1000 && car.price <= 2000;
          if (range === "₹3,000 - ₹5,000")
            return car.price >= 3000 && car.price <= 5000;
          if (range === "₹5,000+") return car.price > 5000;
          return true;
        })
      );
    }
    setFilteredCars(result);
    setIsFilterOpen(false);
  };

  const toggleFilter = (value, selectedList, setSelectedList) => {
    const updated = selectedList.includes(value)
      ? selectedList.filter((v) => v !== value)
      : [...selectedList, value];
    setSelectedList(updated);
  };

  const handleClearAll = () => {
    setLocation("");
    setStartDate("");
    setEndDate("");
    setSelectedBrands([]);
    setSelectedFuel([]);
    setSelectedSegment([]);
    setSelectedSeating([]);
    setSelectedPrice([]);
    setFilteredCars(allCars);
  };

  const filterSections = [
    {
      title: "Brand",
      options: [...new Set(allCars.map((car) => car.brand))],
      selected: selectedBrands,
      setSelected: setSelectedBrands,
    },
    {
      title: "Fuel Type",
      options: [...new Set(allCars.map((car) => car.fuel))],
      selected: selectedFuel,
      setSelected: setSelectedFuel,
    },
    {
      title: "Segment",
      options: [...new Set(allCars.map((car) => car.segment))],
      selected: selectedSegment,
      setSelected: setSelectedSegment,
    },
    {
      title: "Seating",
      options: [...new Set(allCars.map((car) => car.seating))],
      selected: selectedSeating,
      setSelected: setSelectedSeating,
    },
    {
      title: "Price Range",
      options: [
        "Below ₹1,000",
        "₹1,000 - ₹2,000",
        "₹3,000 - ₹5,000",
        "₹5,000+",
      ],
      selected: selectedPrice,
      setSelected: setSelectedPrice,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#ffe4d6] font-sans">
      <Header />

      {/* Filters section */}
      <div className="flex flex-col md:flex-row justify-between gap-4 items-center px-6 py-4 bg-[#ffd1b5]">
        <div className="flex gap-4 items-end flex-wrap w-full md:items-center">
          <div className="flex flex-col text-sm">
            <label htmlFor="location" className="font-medium mb-1">📍 Location</label>
            <input
              type="text"
              id="location"
              placeholder="Enter city"
              className="px-3 py-1 rounded border border-gray-300 text-black"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="flex flex-col text-sm">
            <label htmlFor="start" className="font-medium mb-1">📅 Start Date</label>
            <input
              type="date"
              id="start"
              className="px-3 py-1 rounded border border-gray-300 text-black"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div className="flex flex-col text-sm">
            <label htmlFor="end" className="font-medium mb-1">📅 End Date</label>
            <input
              type="date"
              id="end"
              className="px-3 py-1 rounded border border-gray-300 text-black"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>

          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={applyFilters}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-all"
            >
              Search
            </button>
            <button
              onClick={() => setIsFilterOpen(true)}
              className="md:hidden p-2 text-orange-600"
            >
              <FiFilter size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Main content with filter sidebar + listings */}
      <div className="flex-grow flex w-full overflow-hidden">
        <aside
          className={`absolute md:relative z-40 bg-[#fff6f0] w-4/5 max-w-xs md:w-64 border-r p-4 h-full md:h-auto overflow-y-auto transition-transform duration-300 ${
            isFilterOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-bold text-md">Filter</h2>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="md:hidden text-sm underline text-orange-600"
            >
              Close
            </button>
          </div>

          <div className="space-y-4 pb-4">
            {filterSections.map((section, i) => (
              <div key={i}>
                <h3 className="font-semibold mb-1">{section.title}</h3>
                {section.options.map((opt, idx) => (
                  <div key={idx} className="flex items-center gap-2 my-1">
                    <input
                      type="checkbox"
                      className="accent-orange-500"
                      checked={section.selected.includes(opt)}
                      onChange={() =>
                        toggleFilter(opt, section.selected, section.setSelected)
                      }
                    />
                    <label className="text-sm">{opt}</label>
                  </div>
                ))}
              </div>
            ))}
            <div className="flex justify-end">
              <button
                onClick={handleClearAll}
                className="text-xs underline text-orange-600"
              >
                Clear All
              </button>
            </div>
          </div>
        </aside>

        <main className="flex-1 px-4 sm:px-6 py-6 overflow-y-auto">
          <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
            Find the Perfect Car for You
          </h1>

          {filteredCars.length === 0 ? (
            <p className="text-gray-600 text-center">
              No cars available for the selected filters.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6">
              {filteredCars.map((car) => (
                <div
                  key={car.id}
                  className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <div className="md:w-[50%] w-full h-[220px] flex items-center justify-center bg-gray-100 relative">
                    <img
                      src={car.img}
                      alt={car.title}
                      className="max-w-full max-h-full object-contain p-2"
                    />
                    <span className="absolute top-2 left-2 bg-black text-white text-[10px] px-2 py-0.5 rounded">
                      Prime
                    </span>
                  </div>
                  <div className="md:w-[50%] w-full bg-[#1a1a1a] text-white px-4 py-4 flex flex-col justify-between">
                    <div className="flex justify-between">
                      <div>
                        <p className="text-xs mb-1">{car.year}</p>
                        <h3 className="text-lg font-bold leading-tight">
                          {car.title}
                        </h3>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-semibold">
                          ₹{car.price.toLocaleString()}
                        </p>
                        <p className="text-xs text-orange-400 mt-1 leading-tight">
                          Get 10% off <br /> Use Code SELFDO
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-orange-200 mt-4">
                      <span>🕒 8 hours/80km</span>
                      <span>⛽ {car.fuel}</span>
                      <span>📍 {car.location}</span>
                    </div>
                    <div className="text-right mt-4">
                      <Link to={`/booking/${car.id}`}>
                        <button className="bg-orange-500 px-4 py-1.5 rounded text-sm text-white hover:bg-orange-600 transition-all">
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}
