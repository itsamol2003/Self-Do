import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const BookingConfirmationPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state?.booking;

  useEffect(() => {
    if (!bookingData) {
      navigate("/vehicles");
      return;
    }

    try {
      const existingBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
      const isDuplicate = existingBookings.some((b: any) => b.id === bookingData.id);
      if (!isDuplicate) {
        const updatedBookings = [...existingBookings, bookingData];
        localStorage.setItem("bookings", JSON.stringify(updatedBookings));
      }
    } catch (err) {
      console.error("Error saving booking to localStorage:", err);
    }
  }, [bookingData, navigate]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center relative animate-bounce-in">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-xl">
          <CheckCircle size={60} className="text-green-500" />
        </div>
        <h2 className="mt-10 text-2xl font-bold text-gray-800 font-serif">Booking Confirmed!</h2>
        <p className="mt-2 text-gray-600 text-sm font-medium">
          Your car has been successfully booked.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 rounded-lg border border-orange-600 text-orange-600 hover:bg-orange-100 transition font-semibold"
          >
            Go to Home
          </button>
          <button
            onClick={() => navigate("/my-booking")}
            className="px-6 py-2 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition font-semibold"
          >
            View Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmationPage;

// Optional: You can add this animation class in your Tailwind config or global CSS
// .animate-bounce-in {
//   animation: bounceIn 0.6s ease-out;
// }
// @keyframes bounceIn {
//   0% {
//     transform: scale(0.5);
//     opacity: 0;
//   }
//   100% {
//     transform: scale(1);
//     opacity: 1;
//   }
// }
