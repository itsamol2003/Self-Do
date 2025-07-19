import React, { useState } from "react";
import Header from "../../components/navigation/TopNavbar";
import Footer from "../../components/navigation/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    code: "+91",
    message: "",
    acceptedTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Header />
      <div className="w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 h-[400px] relative">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Gera+Imperium+Rise,+Wipro+Circle,+Hinjewadi+Phase+2,+Pune"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
            aria-label="Open in Google Maps"
          ></a>
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.345924252555!2d73.7340123!3d18.5936375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b97a12345678%3A0xfedcb482742abcde!2sGera+Imperium+Rise,+Wipro+Circle,+Hinjewadi+Phase+2,+Pune,+Maharashtra+411057!5e0!3m2!1sen!2sin!4v1711456789012"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="w-full lg:w-1/2 bg-white p-6 lg:p-10 flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-white rounded shadow-md p-6 space-y-4 border"
          >
            <h2 className="text-2xl font-semibold text-center text-black">Request More Information</h2>
            <input
              name="name"
              type="text"
              placeholder="Full Name*"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
            <input
              name="email"
              type="email"
              placeholder="Enter Email ID*"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
            <div className="flex gap-2">
              <select
                name="code"
                value={formData.code}
                onChange={handleChange}
                className="border border-gray-300 px-3 py-2 rounded"
              >
                <option value="+91">India (+91)</option>
                <option value="+1">USA (+1)</option>
                <option value="+44">UK (+44)</option>
              </select>
              <input
                name="phone"
                type="text"
                placeholder="Contact Number*"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message*"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              rows={4}
            ></textarea>
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm">
                <input
                  type="checkbox"
                  name="acceptedTerms"
                  checked={formData.acceptedTerms}
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                I accept the <a href="/terms" className="text-blue-600 underline">Terms & Conditions</a>
              </label>
              <button
                type="submit"
                className="bg-[#0d3f5e] text-white px-5 py-2 rounded hover:bg-[#082c42]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-[#4B7A8F] text-white py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-3">Keep In Touch</h3>
          <h4 className="font-semibold">Headquarters</h4>
          <p className="mb-2">
            Registered office No.623,624<br />
            Gera Imperium Rise,<br />
            Wipro Circle Rajiv Gandhi Infotech Park,<br />
            Hinjewadi Phase 2, Pune 411057.
          </p>
          <h4 className="font-semibold mt-4">Email Us</h4>
          <p className="mb-4">defencegurucyber.edu@gmail.com</p>
          {/* <div className="flex gap-4">
            <a href="https://www.facebook.com/people/Defence-Guru-Cyber-Education-Institute/61557953980411/" target="_blank">
              <img src="/Assests/f.png" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/defence_guru_cyber/" target="_blank">
              <img src="/Assests/insta.png" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/company/defence-guru-cyber-education-institute/?originalSubdomain=in" target="_blank">
              <img src="/Assests/link.png" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com/@DefenceGuru23" target="_blank">
              <img src="/Assests/youtub.png" alt="YouTube" className="w-6 h-6" />
            </a>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
