import React, { useState } from "react";
import { FiUser, FiPhone, FiMail, FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import selfCar from "../../../Assets/self car.png";
import RegisterSuccessPopup from "../../components/common/RegisterSuccess";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [otpVerified, setOtpVerified] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const [showPopup, setShowPopup] = useState(false); // ✅ popup state

  const handleSendOtp = () => {
    if (!email.trim()) {
      alert("Please enter email");
      return;
    }
    setOtpSent(true);
    alert("OTP sent to " + email);
  };

  const handleOtpChange = (value: string, index: number) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value.replace(/\D/, ""); // digits only
    setOtp(updatedOtp);
  };

  const handleVerifyOtp = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length === 4) {
      alert("OTP Verified");
      setOtpVerified(true);
    } else {
      alert("Please enter 4 digit OTP");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: any = {};
    let hasError = false;

    if (!name.trim()) {
      newErrors.name = "Please enter name";
      hasError = true;
    }
    if (!mobile.trim() || mobile.length !== 10) {
      newErrors.mobile = "Enter valid 10-digit mobile";
      hasError = true;
    }
    if (!email.trim()) {
      newErrors.email = "Please enter email";
      hasError = true;
    }
    if (!otpVerified) {
      newErrors.otp = "Please verify OTP";
      hasError = true;
    }
    if (password.length < 6) {
      newErrors.password = "Min 6 characters";
      hasError = true;
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      hasError = true;
    }
    if (!agree) {
      newErrors.agree = "Please accept terms";
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
    localStorage.setItem("username", name); // for Navbar display
localStorage.setItem("registeredName_" + email, name); // for Login

      setShowPopup(true); // ✅ show popup
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    navigate("/login"); // ✅ go to login
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-2 relative">
      <div className="relative flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Left Side */}
        <div className="bg-[#F35B04] md:w-[40%] w-full p-6 text-white z-10 rounded-l-2xl">
          <h1 className="text-2xl md:text-3xl font-semibold text-black">Welcome to</h1>
          <h3 className="text-xl md:text-2xl font-serif font-semibold mt-1 mb-2">
            Self Do Car Rental
          </h3>
          <p className="text-sm md:text-base text-black">
            Get started to explore your dashboard!
          </p>
        </div>

        {/* Right Side */}
        <div className="md:w-[60%] w-full bg-white p-6 flex flex-col items-center z-10">
          <h2 className="text-lg md:text-xl mb-4 font-serif font-semibold text-black w-[80%] md:w-[65%] text-left">
            Sign up your Account
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full items-center">
            {/* Name */}
            <div className="w-[80%] md:w-[65%]">
              <label className="text-xs font-semibold mb-1 block">Name</label>
              <div className="flex items-center border border-gray-300 rounded-md h-10 px-2">
                <FiUser className="text-gray-500 mr-2 text-sm" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Your Name"
                  className="w-full outline-none text-sm h-full"
                />
              </div>
              {errors.name && <p className="text-red-500 text-[10px]">{errors.name}</p>}
            </div>

            {/* Mobile */}
            <div className="w-[80%] md:w-[65%]">
              <label className="text-xs font-semibold mb-1 block">Mobile</label>
              <div className="flex items-center border border-gray-300 rounded-md h-10 px-2">
                <FiPhone className="text-gray-500 mr-2 text-sm" />
                <input
                  type="text"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
                  maxLength={10}
                  placeholder="Enter Mobile Number"
                  className="w-full outline-none text-sm h-full"
                />
              </div>
              {errors.mobile && <p className="text-red-500 text-[10px]">{errors.mobile}</p>}
            </div>

            {/* Email */}
            <div className="w-[80%] md:w-[65%]">
              <label className="text-xs font-semibold mb-1 block">Email</label>
              <div className="flex items-center border border-gray-300 rounded-md h-10 px-2">
                <FiMail className="text-gray-500 mr-2 text-sm" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  className="w-full outline-none text-sm h-full"
                />
              </div>
              {errors.email && <p className="text-red-500 text-[10px]">{errors.email}</p>}
            </div>

            {/* OTP Section */}
            {!otpVerified && (
              <>
                <div className="w-[80%] md:w-[65%] flex gap-3">
                  <button
                    type="button"
                    className="text-white bg-[#F35B04] px-4 py-1 rounded-md text-xs"
                    onClick={handleSendOtp}
                  >
                    Send OTP
                  </button>
                  {otpSent && (
                    <button
                      type="button"
                      className="text-white bg-green-600 px-4 py-1 rounded-md text-xs"
                      onClick={handleVerifyOtp}
                    >
                      Verify OTP
                    </button>
                  )}
                </div>

                {otpSent && (
                  <div className="w-[80%] md:w-[65%] flex gap-3">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(e.target.value, index)}
                        className="w-10 h-10 border border-black rounded-md text-center text-sm"
                      />
                    ))}
                  </div>
                )}
                {errors.otp && (
                  <p className="text-red-500 text-[10px] w-[80%] md:w-[65%]">{errors.otp}</p>
                )}
              </>
            )}

            {/* Password & Confirm Password */}
            {otpVerified && (
              <>
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
                  {errors.password && <p className="text-red-500 text-[10px]">{errors.password}</p>}
                </div>

                <div className="w-[80%] md:w-[65%]">
                  <label className="text-xs font-semibold mb-1 block">Confirm Password</label>
                  <div className="flex items-center border border-gray-300 rounded-md h-10 px-2">
                    <FiLock className="text-gray-500 mr-2 text-sm" />
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm Password"
                      className="w-full outline-none text-sm h-full"
                    />
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-[10px]">{errors.confirmPassword}</p>
                  )}
                </div>

                <div className="w-[80%] md:w-[65%]">
                  <label className="text-xs font-semibold block mb-1">Add Licence</label>
                  <input
                    type="file"
                    accept="image/*"
                    className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm"
                  />
                </div>
              </>
            )}

            {/* Terms */}
            <div className="flex items-center text-[10px] text-gray-600 w-[80%] md:w-[65%] mt-1">
              <input
                type="checkbox"
                className="mr-2"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <label>
                By continuing, you agree to Self Do’s Privacy Policy & Terms of Use
              </label>
            </div>
            {errors.agree && (
              <p className="text-red-500 text-[10px] w-[80%] md:w-[65%] -mt-1">{errors.agree}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="bg-black text-white h-10 rounded-md hover:bg-gray-800 transition text-sm w-[80%] md:w-[65%]"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Car image */}
        <img
          src={selfCar}
          alt="Car"
          className="absolute bottom-[-40px] left-1/3 transform -translate-x-1/2 w-[50%] md:w-[30%] z-20"
        />
      </div>

      {/* ✅ Popup shown after success */}
      {showPopup && <RegisterSuccessPopup onClose={handlePopupClose} />}
    </div>
  );
};

export default Register;
