import React from "react";
import { Link } from "react-router-dom";

interface MobileSidebarProps {
  isOpen: boolean;
  username: string | null;
  onClose: () => void;
  onLogout: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({
  isOpen,
  username,
  onClose,
  onLogout,
}) => {
  return (
    <div
      className={`fixed right-0 top-[64px] w-64 h-[calc(100%-64px)] bg-white text-black shadow-lg z-40 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-lg font-bold">Menu</h2>
        <button onClick={onClose}>✕</button>
      </div>
      <div className="flex flex-col p-4 space-y-3 text-sm font-medium">
        <Link to="/my-booking" onClick={onClose}>My Booking</Link>
        <Link to="/my-profile" onClick={onClose}>My Profile</Link>
        <Link to="/support" onClick={onClose}>Support</Link>
        <Link to="/reviews" onClick={onClose}>Feedback</Link>
        <Link to="/contact-us" onClick={onClose}>Contact Us</Link>
        <Link to="/about-us" onClick={onClose}>About Us</Link>
        <Link to="/privacy-policy" onClick={onClose}>Privacy Policy</Link>
        <Link to="/terms" onClick={onClose}>Terms</Link>
        {username ? (
          <button onClick={() => { onLogout(); onClose(); }} className="text-left">Logout</button>
        ) : (
          <Link to="/login" onClick={onClose}>Login/Signup</Link>
        )}
      </div>
    </div>
  );
};

export default MobileSidebar;
