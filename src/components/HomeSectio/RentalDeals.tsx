import { Eye, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import speedIcon from "../../../Assets/Vector (1).png";
import fuelIcon from "../../../Assets/Vector.png";
import blackCar from "../../../Assets/Black Car.png";
import whiteCar from "../../../Assets/White Car.png";
import blueCar from "../../../Assets/Blue Car.png";
import blackbmw from "../../../Assets/Black bmw.png";

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

const RentalDeals = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f7f5f2] text-black px-4 sm:px-8 lg:px-20 py-10">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
        Unbeatable Rental Deals
      </h2>

      {/* ✅ Responsive Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-8">
  <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white w-full max-w-[200px]">
    <option>Model</option>
    <option>Hyundai</option>
    <option>Toyota</option>
  </select>

  <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white w-full max-w-[200px]">
    <option>Location</option>
  </select>

  <input
    type="date"
    className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white w-full max-w-[200px]"
  />

  <button className="bg-white border border-orange-600 text-orange-600 px-4 py-2 rounded-md text-sm flex items-center justify-center gap-2 hover:bg-orange-50 transition w-full max-w-[200px]">
    <Search size={16} />
    Search
  </button>

  <button
    onClick={() => navigate("/view-all-car")}
    className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm flex items-center justify-center gap-2 hover:bg-orange-700 transition w-full max-w-[280px]"
  >
    <Eye size={16} />
    View All
  </button>
</div>


      {/* Cars List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {cars.map((car) => (
          <div
            key={car.id}
            onClick={() => navigate(`/Booking/${car.id}`)}
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
  );
};

export default RentalDeals;
