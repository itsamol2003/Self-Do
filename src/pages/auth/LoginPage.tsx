import React, { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import selfCar from "../../../Assets/self car.png";
import LocationModal from "../../components/common/LocationModal";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [showLocationPopup, setShowLocationPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;
    const newErrors = { email: "", password: "" };

    if (!email.trim()) {
      newErrors.email = "Please enter your email";
      hasError = true;
    }

    if (!password.trim()) {
      newErrors.password = "Please enter your password";
      hasError = true;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      const savedName = localStorage.getItem("registeredName_" + email);
      localStorage.setItem("username", savedName || "User");
      setShowLocationPopup(true);
    }
  };

  const handleLocationConfirm = (location: string, lat: number, lon: number) => {
    localStorage.setItem("selectedLocation", location);
    localStorage.setItem("lat", lat.toString());
    localStorage.setItem("lon", lon.toString());
    setShowLocationPopup(false);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-2 relative">
      <div className="relative flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Left Section */}
        <div className="bg-[#F35B04] md:w-[40%] w-full p-6 flex flex-col justify-start text-white z-10">
          <h1 className="text-2xl md:text-3xl font-semibold text-black">Welcome Back</h1>
          <h3 className="text-xl md:text-2xl font-serif font-semibold mt-1 mb-2">
            Self Do Car Rental
          </h3>
          <p className="text-sm md:text-base text-black">
            Sign in to access your account and bookings!
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-[60%] w-full bg-white p-6 flex flex-col justify-center items-center z-10">
          <h2 className="text-lg md:text-xl mb-4 font-serif font-semibold text-black w-[80%] md:w-[65%] text-left">
            Login to your Account
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full items-center">
            {/* Email */}
            <div className="w-[80%] md:w-[65%]">
              <label className="text-xs font-semibold mb-1 block">Email</label>
              <div className="flex items-center border border-gray-300 rounded-md h-10 px-2">
                <FiMail className="text-gray-500 mr-2 text-sm" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full outline-none text-sm h-full"
                />
              </div>
              {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div className="w-[80%] md:w-[65%]">
              <label className="text-xs font-semibold mb-1 block">Password</label>
              <div className="flex items-center border border-gray-300 rounded-md h-10 px-2">
                <FiLock className="text-gray-500 mr-2 text-sm" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full outline-none text-sm h-full"
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-[10px] mt-1">{errors.password}</p>
              )}
            </div>

            {/* Forgot Password */}
            <div className="w-[80%] md:w-[65%] text-right text-[11px] text-blue-500 hover:underline cursor-pointer">
              <span onClick={() => navigate("/forgot-password")}>Forgot Password?</span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-black text-white h-10 rounded-md hover:bg-gray-800 transition text-sm w-[80%] md:w-[65%]"
            >
              Sign In
            </button>

            <p className="text-[11px] text-gray-600">
              Don’t have an account?{" "}
              <span
                onClick={() => navigate("/register")}
                className="text-blue-500 cursor-pointer hover:underline"
              >
                Register
              </span>
            </p>
          </form>

          {/* Mobile Car Image - Only visible on small screens */}
          <div className="mt-4 md:hidden w-full flex justify-center">
            <img src={selfCar} alt="Car" className="w-[50%]" />
          </div>
        </div>

        {/* Desktop Car Image - hidden on small screens */}
        <img
          src={selfCar}
          alt="Car"
          className="hidden md:block absolute bottom-[-40px] left-1/3 transform -translate-x-1/2 w-[30%] z-20"
        />
      </div>

      {/* Location Modal */}
      {showLocationPopup && (
        <LocationModal
          onClose={() => setShowLocationPopup(false)}
          onConfirm={handleLocationConfirm}
        />
      )}
    </div>
  );
};

export default Login;
