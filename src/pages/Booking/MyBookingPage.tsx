import React, { useEffect, useState } from "react";
import Header from "../../components/navigation/TopNavbar";
import Footer from "../../components/navigation/Footer";

const MyBookingPage: React.FC = () => {
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("bookings");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setBookings(parsed);
        }
      } catch (e) {
        console.error("Error reading bookings from localStorage", e);
      }
    }
  }, []);

  return (
    <div className="bg-white text-black min-h-screen">
      <Header />
      <div className="px-4 md:px-20 py-10">
        <h2 className="text-3xl font-bold font-serif mb-6">My Bookings</h2>

        {bookings.length > 0 ? (
          <div className="space-y-6">
            {bookings.map((booking, index) => (
              <div
                key={booking.id || index}
                className="flex flex-col md:flex-row rounded-xl overflow-hidden shadow border border-gray-200"
                style={{ backgroundColor: '#fff3eb' }}
              >
                <div className="bg-[#f5e4d1] w-full md:w-[30%] flex items-center justify-center p-4">
                  <img
                    src={
                      booking?.vehicle?.images?.[0] ||
                      "https://via.placeholder.com/300"
                    }
                    alt={booking?.vehicle?.name}
                    className="object-contain h-36 md:h-44"
                  />
                </div>

                <div className="w-full md:w-[70%] bg-[#fff3eb] px-6 py-4">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                    <h3 className="font-serif font-bold text-lg md:text-xl">
                      {booking?.vehicle?.name}
                    </h3>
                    <div className="text-right">
                      {booking?.discount && (
                        <p className="text-green-600 font-medium text-sm">
                          Paid: -₹{booking?.discount}
                        </p>
                      )}
                      <p
                        className={`font-bold text-lg ${
                          booking?.paymentStatus === "Paid"
                            ? "text-black"
                            : "text-red-600"
                        }`}
                      >
                        ₹{booking?.price}
                      </p>
                      <p className="text-sm">Total Amount Paid / Payable</p>
                      {booking?.paymentStatus !== "Paid" && (
                        <button className="mt-2 bg-[#ff5b00] text-white px-4 py-1 rounded-md font-semibold">
                          Pay ₹{booking?.price}
                        </button>
                      )}
                    </div>
                  </div>

                  <p className="text-sm font-semibold">
                    {booking?.pickupDate} – {booking?.returnDate}
                  </p>
                  <p className="text-sm font-medium mt-1">
                    {booking?.pickupLocation || "Pickup Location"}
                    <span className="text-gray-700 ml-2">Pickup Location</span>
                  </p>
                  <p className="text-sm font-medium">
                    {booking?.returnLocation || "Drop-off Location"}
                    <span className="text-gray-700 ml-2">Drop-off Location</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-8">
            No bookings found. Go to the booking page to rent a car.
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyBookingPage;