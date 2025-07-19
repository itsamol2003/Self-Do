import React, { useState } from "react";
import { Star } from "lucide-react";
import Header from "../../components/navigation/TopNavbar";
import Footer from "../../components/navigation/Footer";

const StarRating = ({ rating, onRatingChange }: any) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((s) => (
      <Star
        key={s}
        fill={s <= rating ? "#000000" : "none"}
        stroke="#000000"
        className="w-6 h-6 cursor-pointer"
        onClick={() => onRatingChange(s)}
      />
    ))}
  </div>
);

const ReviewPage = () => {
  const [rating, setRating] = useState(3);
  const [reviewText, setReviewText] = useState("");
  const [reportText, setReportText] = useState("");

  const handleSubmitReview = () => {
    alert(`Rating: ${rating} ⭐\nReview: ${reviewText}`);
    setReviewText("");
  };

  const handleReport = () => {
    alert("Issue reported: " + reportText);
    setReportText("");
  };

  const reviews = Array(6).fill({
    name: "Marco Cornacchia",
    company: "Agarwal Hospitals",
    text: "Absolutely stunning designs! Transformed my space beautifully with elegance. Highly recommend their expertise!",
    stars: 5,
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  });

  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow px-4 md:px-12 py-10 space-y-8">
        {/* ⭐ Rate Section */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-black font-serif mb-2">
            Rate the vehicle
          </h2>

          <StarRating rating={rating} onRatingChange={setRating} />
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            rows={4}
            placeholder="Smooth booking... next road trip!"
            className="mt-4 p-4 border border-gray-300 rounded-md w-full bg-white text-black placeholder:text-gray-500"
          />
          <div className="text-right mt-2">
            <button
              onClick={handleSubmitReview}
              className="bg-[#ff5b00] text-white px-6 py-2 rounded-md"
            >
              Submit Review
            </button>
          </div>
        </div>

        {/* 💬 Happy Customers */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-black font-serif mb-4">
            Our Happy Customers
          </h2>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <div key={i} className="bg-[#1A1A1A] text-white rounded-md p-4">
                <div className="flex items-center mb-2">
                  <img
                    src={r.photo}
                    alt={r.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="font-semibold">{r.name}</p>
                    <p className="text-xs text-gray-300">{r.company}</p>
                  </div>
                </div>
                <p className="text-gray-200 mb-2 text-sm">{r.text}</p>
                <div className="flex gap-1">
                  {[...Array(r.stars)].map((_, idx) => (
                    <Star
                      key={idx}
                      fill="#ffffff"
                      stroke="#ffffff"
                      className="w-4 h-4"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 📝 Report Section */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-black font-serif mb-2">
            Report Issue
          </h2>

          <textarea
            value={reportText}
            onChange={(e) => setReportText(e.target.value)}
            rows={4}
            placeholder="The car was not handed over due to incomplete documentation..."
            className="w-full p-4 border border-gray-300 rounded-md bg-white text-black placeholder:text-gray-500"
          />
          <div className="text-right mt-2">
            <button
              onClick={handleReport}
              className="bg-[#E53935] text-white px-6 py-2 rounded-md"
            >
              Submit Review
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReviewPage;
