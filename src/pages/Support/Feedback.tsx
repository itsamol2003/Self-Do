import React, { useState } from "react";
import { Star } from "lucide-react";
import Header from "../../components/navigation/TopNavbar";
import Footer from "../../components/navigation/Footer";

const StarRating = ({ rating, onRatingChange }: any) => {
  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          fill={star <= rating ? "#ff5b00" : "none"}
          stroke="#ff5b00"
          className="w-6 h-6 cursor-pointer"
          onClick={() => onRatingChange(star)}
        />
      ))}
    </div>
  );
};

const ReviewPage = () => {
  const [rating, setRating] = useState(3);
  const [reviewText, setReviewText] = useState("");
  const [reportText, setReportText] = useState("");

  const handleSubmitReview = () => {
    alert("Review submitted: " + reviewText);
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
    stars: 5
  });

  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow px-4 md:px-12 py-10">
        {/* Rate Section */}
        <h2 className="text-2xl font-bold mb-2">Rate the vehicle</h2>
        <StarRating rating={rating} onRatingChange={setRating} />

        <textarea
          className="w-full mt-4 p-4 border rounded-md bg-white text-black border-gray-300"
          placeholder="Smooth booking process and the car was in excellent condition. Pick-up in Pune was quick and hassle-free. Will definitely rent again for my next road trip!"
          rows={4}
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <div className="text-right mt-2">
          <button
            onClick={handleSubmitReview}
            className="bg-[#ff5b00] text-white px-6 py-2 rounded-md"
          >
            Submit Review
          </button>
        </div>

        {/* Testimonials Section */}
        <h3 className="text-2xl font-bold mt-12 mb-6">Our Happy Customers</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review, index) => (
            <div key={index} className="bg-black text-white p-4 rounded-md">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="user"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-sm">{review.name}</h4>
                  <p className="text-xs text-gray-300">{review.company}</p>
                </div>
              </div>
              <p className="text-sm mb-2">{review.text}</p>
              <div className="flex">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} fill="#ff5b00" stroke="#ff5b00" className="w-4 h-4" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Report Section */}
        <h4 className="text-lg font-semibold mt-12 mb-2">Report Issue</h4>
        <textarea
          className="w-full p-4 border rounded-md bg-white text-black border-gray-300"
          placeholder="The car was not handed over due to incomplete documentation despite prior confirmation. I request a resolution or refund for the cancellation charges applied."
          rows={4}
          value={reportText}
          onChange={(e) => setReportText(e.target.value)}
        />
        <div className="text-right mt-2">
          <button
            onClick={handleReport}
            className="bg-red-600 text-white px-6 py-2 rounded-md"
          >
            Submit Review
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReviewPage;
