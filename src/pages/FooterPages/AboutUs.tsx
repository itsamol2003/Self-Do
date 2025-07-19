import React from "react";
import Header from "../../components/navigation/TopNavbar";
import Footer from "../../components/navigation/Footer";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="px-4 py-10 max-w-4xl mx-auto text-gray-800 space-y-6">
        <h1 className="text-4xl font-bold text-center">About Self-Do Car</h1>
        <p className="text-lg leading-relaxed text-justify">
          At <strong>Self-Do Car</strong>, we’re on a mission to make driving in Pune effortless, stylish, and completely yours.
          Whether you’re a young professional heading to meetings, a student exploring the city, or a family out for a weekend getaway,
          our self-drive cars are ready when you are.
          <br /><br />
          Think of us as your personal set of wheels — clean, reliable, and perfectly suited for quick errands, spontaneous plans, or peaceful drives.
          With a modern fleet, flexible hourly rentals, and zero hidden charges, we put you in control of your journey.
          Why wait for cabs or adjust to someone else’s schedule? With us, you drive on your terms.
          From compact city rides to spacious family cars, we have something for every mood and occasion.
          <br /><br />
          At <strong>Self-Do Car</strong>, it’s more than a ride. It’s freedom, comfort, and the joy of exploring Pune at your own pace.
          <br /><br />
          <span className="block text-xl font-semibold text-center">Your City. Your Drive. Your Rules.</span>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
