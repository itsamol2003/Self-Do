import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import headerLogo from "../../../Assets/Logo-Header.svg";

const Navbar = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (storedName) {
      setUsername(storedName);
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }

      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername(null);
    navigate("/login");
  };

  return (
    <>
      {/* Navbar Header */}
      <nav className="w-full bg-[#f8f6f8] py-2 px-4 sm:px-6 md:px-10 flex justify-between items-center shadow-sm sticky top-0 z-50">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={headerLogo}
            alt="Self Do Logo"
            className="h-10 sm:h-12 md:h-14 lg:h-12 w-auto object-contain"
          />
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          {/* Services Dropdown - Desktop Only */}
          <div className="relative hidden md:block" ref={servicesRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center text-sm md:text-base font-medium text-black focus:outline-none"
            >
              Services
              <ChevronDown size={16} className="ml-1 sm:size-4 md:size-5" />
            </button>
            {servicesOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded shadow-md z-50">
                <Link to="/support" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Support</Link>
                <Link to="/my-profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Profile</Link>
                <Link to="/reviews" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Feedback</Link>
                <Link to="/my-booking" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Booking</Link>
                <Link to="/about-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About Us</Link>
                <Link to="/contact-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact Us</Link>
                <Link to="/privacy-policy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Privacy Policy</Link>
                <Link to="/terms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Terms</Link>
              </div>
            )}
          </div>

          {/* Username Dropdown - All Screens */}
          {username ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-black text-[10px] sm:text-sm md:text-base font-semibold capitalize"
              >
                {username}
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-md z-50">
                  <Link to="/my-profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Profile</Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/Login"
              className="hidden md:inline-block bg-black text-white text-xs md:text-sm px-5 py-2.5 rounded-md hover:bg-gray-800 transition"
            >
              Login/Signup
            </Link>
          )}

          {/* Hamburger Icon - Mobile Only */}
          <button
            className="md:hidden text-black"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed right-0 top-[64px] w-64 h-[calc(100%-64px)] bg-white shadow-lg z-40 transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setMobileMenuOpen(false)}>✕</button>
        </div>
        <div className="flex flex-col p-4 space-y-3 text-sm font-medium">
          <Link to="/support" onClick={() => setMobileMenuOpen(false)}>Support</Link>
          <Link to="/my-profile" onClick={() => setMobileMenuOpen(false)}>My Profile</Link>
          <Link to="/reviews" onClick={() => setMobileMenuOpen(false)}>Feedback</Link>
          <Link to="/my-booking" onClick={() => setMobileMenuOpen(false)}>My Booking</Link>
          <Link to="/about-us" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <Link to="/contact-us" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
          <Link to="/privacy-policy" onClick={() => setMobileMenuOpen(false)}>Privacy Policy</Link>
          <Link to="/terms" onClick={() => setMobileMenuOpen(false)}>Terms</Link>
          {username ? (
            <button onClick={() => { handleLogout(); setMobileMenuOpen(false); }} className="text-left">Logout</button>
          ) : (
            <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Login/Signup</Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
