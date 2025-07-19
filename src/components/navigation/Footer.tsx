import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1A1717] text-white/90 px-4 md:px-16 py-8 text-sm w-full">
      <div className="flex flex-col md:flex-row justify-between gap-8 w-full">
        {/* Left section */}
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
            <Link to="/about-us" className="hover:underline">About Us</Link>
            <Link to="/contact-us" className="hover:underline">Contact Us</Link>
          
          </div>
          <p className="text-white/70 mt-2 sm:mt-0">@Self Do | 2025 All rights reserved.</p>
        </div>

        {/* Right section */}
        <div className="flex flex-col gap-4 items-start md:items-end w-full md:w-auto">
          <div className="flex gap-4 text-white text-lg">
            <a
              href="https://www.facebook.com/people/Defence-Guru-Cyber-Education-Institute/61557953980411/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="cursor-pointer hover:text-gray-300" />
            </a>
            <a
              href="https://www.instagram.com/defence_guru_cyber/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="cursor-pointer hover:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/company/defence-guru-cyber-education-institute/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="cursor-pointer hover:text-gray-300" />
            </a>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="cursor-pointer hover:text-gray-300" />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
