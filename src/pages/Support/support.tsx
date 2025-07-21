import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  UploadCloud,
  PhoneCall,
  Mail,
  MessageCircle,
  Ticket,
} from "lucide-react";
import Header from "../../components/navigation/TopNavbar";
import Footer from "../../components/navigation/Footer";

import phoneMockupCar from "../../../Assets/Mobile.jpg";
import googlePlay from "../../../Assets/Googlestor.png";
import appStore from "../../../Assets/AppStor.png";

const faqs = [
  {
    question: "Do I need to be present in person to receive the car?",
    answer:
      "Yes, it is mandatory for the customer who made the booking to be present at the time of delivery...",
  },
  {
    question: "What documents do I need to show during car pickup?",
    answer:
      "You will need to show a valid driving license, Aadhar card, and booking confirmation.",
  },
  {
    question: "What happens if I forget my documents during delivery?",
    answer:
      "The car will not be handed over unless the required documents are verified. The booking may be cancelled.",
  },
  {
    question: "Can someone else drive the car on my behalf?",
    answer:
      "No, the person who booked must be present and drive. It ensures safety and avoids misuse.",
  },
  {
    question: "Can I extend/ cancel/ modify?",
    answer:
      "Yes, based on availability. Please contact support at least 4 hours in advance.",
  },
];

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [supportMsg, setSupportMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (supportMsg.trim()) {
      console.log("Support Message Submitted:", supportMsg);
      setSubmitted(true);
      setSupportMsg("");
    }
  };

  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow px-4 md:px-10 pt-24 pb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Support / FAQs</h2>

        {/* Raise a Ticket First */}
        <div className="max-w-5xl mx-auto mb-14 grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 border rounded-lg p-6 shadow">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <Ticket size={20} /> Raise a Ticket
            </h3>
            <form onSubmit={handleSubmit}>
              <textarea
                value={supportMsg}
                onChange={(e) => setSupportMsg(e.target.value)}
                placeholder="Describe your issue..."
                className="w-full border rounded-md p-3 min-h-[100px] resize-y focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <button
                type="submit"
                className="mt-3 bg-[#ff5b00] hover:bg-orange-600 text-white px-5 py-2 rounded-md"
              >
                Submit Ticket
              </button>
            </form>
            {submitted && (
              <p className="text-green-600 mt-2 font-medium">
                ✅ Ticket submitted successfully!
              </p>
            )}
          </div>

          <div className="bg-gray-50 border rounded-lg p-6 shadow space-y-4">
            <div className="flex items-center gap-3">
              <PhoneCall className="text-orange-500" />
              <span className="text-sm font-medium">Call us: <a href="tel:+919999999999" className="text-blue-600">+91 99999 99999</a></span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-orange-500" />
              <span className="text-sm font-medium">Email: <a href="mailto:help@selfdo.in" className="text-blue-600">help@selfdo.in</a></span>
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle className="text-orange-500" />
              <span className="text-sm font-medium">Live Chat coming soon</span>
            </div>
            <div className="flex items-center gap-3">
              <UploadCloud className="text-orange-500" />
              <span className="text-sm font-medium">Upload documents in ticket form</span>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
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

      <section className="w-full bg-white py-12 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 px-4 md:px-8 lg:pl-20">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] leading-snug font-inter md:max-w-[500px]">
            Download <span className="font-bold">Self Do App</span><br />
            for <span className="text-[#F15A29] font-extrabold">FREE</span>
          </h2>
          <p className="text-[#333333] text-base mt-6 leading-loose max-w-md font-normal">
            Self-drive gives you total freedom, privacy, and control over your journey...
          </p>
          <p className="text-[#F15A29] text-sm mt-4 font-medium">
            For faster, easier booking and exclusive deals.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer">
              <img src={googlePlay} alt="Google Play" className="h-12 w-auto cursor-pointer" />
            </a>
            <a href="https://www.apple.com/in/app-store/" target="_blank" rel="noopener noreferrer">
              <img src={appStore} alt="App Store" className="h-12 w-auto cursor-pointer" />
            </a>
          </div>
        </div>

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
  );
};

export default FaqPage;
