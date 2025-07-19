import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Header from "../../components/navigation/TopNavbar";
import Footer from "../../components/navigation/Footer";


import phoneMockupCar from "../../../Assets/Mobile.jpg";
import googlePlay from "../../../Assets/Googlestor.png";
import appStore from "../../../Assets/AppStor.png";
// make sure this path is correct

const faqs = [
  {
    question: "Do I need to be present in person to receive the car?",
    answer:
      "Yes, it is mandatory for the customer who made the booking to be present at the time of delivery. Our delivery executive will verify your documents and hand over the vehicle only after successful verification. This helps ensure the safety and authenticity of the booking and avoids any misuse. The car will not be handed over to a third party under any circumstances. Please plan accordingly to avoid delays or cancellations."
  },
  {
    question: "What documents do I need to show during car pickup?",
    answer:
      "You will need to show a valid driving license, Aadhar card, and booking confirmation."
  },
  {
    question: "What happens if I forget my documents during delivery?",
    answer:
      "The car will not be handed over unless the required documents are verified. The booking may be cancelled."
  },
  {
    question: "Can someone else drive the car on my behalf?",
    answer:
      "No, the person who booked must be present and drive. It ensures safety and avoids misuse."
  },
  {
    question: "Can I extend/ cancel/ modify?",
    answer:
      "Yes, based on availability. Please contact support at least 4 hours in advance."
  }
];

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* FAQ Section */}
      <main className="flex-grow px-4 md:px-10 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full text-left px-6 py-4 rounded-md flex justify-between items-center font-semibold ${
                  openIndex === index
                    ? "bg-white text-black border"
                    : "bg-[#ff5b00] text-white"
                }`}
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              {openIndex === index && (
                <div className="bg-white border border-t-0 px-6 py-4 text-sm text-gray-700 rounded-b-md">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Download App Section */}
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

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-end items-end">
          <img
            src={phoneMockupCar}
            alt="Mobile mockup with orange car"
            className="w-[300px] md:w-[360px] lg:w-[400px] xl:w-[450px] object-contain mt-[120px] self-end mb-[-48px]"
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FaqPage;
