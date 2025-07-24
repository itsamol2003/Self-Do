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
  const [showPopup, setShowPopup] = useState(false);

  const handleSendOtp = () => {
    if (!email.trim()) return alert("Please enter email");
    setOtpSent(true);
    alert("OTP sent to " + email);
  };

  const handleOtpChange = (value: string, index: number) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value.replace(/\D/, "");
    setOtp(updatedOtp);
  };

  const handleVerifyOtp = () => {
    if (otp.join("").length === 4) {
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

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      newErrors.mobile = "Enter valid 10-digit mobile number";
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

    if (password.length !== 6) {
      newErrors.password = "Password must be exactly 6 characters";
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
      localStorage.setItem("username", name);
      localStorage.setItem("registeredName_" + email, name);
      setShowPopup(true);
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 px-2 lg:px-10 flex flex-col lg:flex-row items-start lg:items-center justify-center relative overflow-y-auto">
      <div className="relative flex flex-col lg:flex-row w-full max-w-6xl bg-white shadow-lg rounded-2xl overflow-hidden lg:h-[600px]">

        {/* Left Panel */}
        <div className="bg-[#F35B04] w-full lg:w-[40%] p-6 text-white z-10 rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none text-center lg:text-left flex flex-col justify-center">
          <h1 className="text-2xl lg:text-3xl font-semibold text-black">Welcome to</h1>
          <h3 className="text-xl lg:text-2xl font-serif font-semibold mt-1 mb-2">
            Self Do Car Rental
          </h3>
          <p className="text-sm lg:text-base text-black">Get started to explore your dashboard!</p>
        </div>

        {/* Right Panel */}
        <div className="w-full lg:w-[60%] bg-white px-6 py-8 flex flex-col items-center justify-center z-10">
          <h2 className="text-lg lg:text-xl mb-4 font-serif font-semibold text-black w-[90%] sm:w-[80%] lg:w-[80%] text-left lg:text-center">
            Sign up your Account
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full items-center">
            {[{
              label: "Name", icon: <FiUser />, value: name, onChange: setName, type: "text", name: "name",
              error: errors.name, placeholder: "Enter Your Name"
            },
            {
              label: "Mobile", icon: <FiPhone />, value: mobile,
              onChange: (v: string) => {
                const onlyDigits = v.replace(/\D/g, "");
                if (onlyDigits.length <= 10) setMobile(onlyDigits);
              },
              type: "text", name: "mobile", error: errors.mobile, placeholder: "Enter Mobile Number"
            },
            {
              label: "Email", icon: <FiMail />, value: email, onChange: setEmail, type: "email",
              name: "email", error: errors.email, placeholder: "Enter Your Email"
            }].map((field, idx) => (
              <div key={idx} className="w-[90%] sm:w-[80%] lg:w-[65%]">
                <label className="text-xs font-semibold mb-1 block">{field.label}</label>
                <div className="flex items-center border border-gray-300 rounded-md h-10 px-2">
                  {field.icon}
                  <input
                    type={field.type}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full outline-none text-sm h-full ml-2"
                  />
                </div>
                {field.error && <p className="text-red-500 text-[10px]">{field.error}</p>}
              </div>
            ))}

            {!otpVerified && (
              <>
                <div className="w-[90%] sm:w-[80%] lg:w-[65%] flex gap-3">
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
                  <div className="w-[90%] sm:w-[80%] lg:w-[65%] flex gap-3">
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
                  <p className="text-red-500 text-[10px] w-[90%] sm:w-[80%] lg:w-[65%]">{errors.otp}</p>
                )}
              </>
            )}

            {otpVerified && (
              <>
                {[{
                  label: "Password", value: password, onChange: setPassword, error: errors.password
                },
                {
                  label: "Confirm Password", value: confirmPassword, onChange: setConfirmPassword, error: errors.confirmPassword
                }].map((field, idx) => (
                  <div key={idx} className="w-[90%] sm:w-[80%] lg:w-[65%]">
                    <label className="text-xs font-semibold mb-1 block">{field.label}</label>
                    <div className="flex items-center border border-gray-300 rounded-md h-10 px-2">
                      <FiLock className="text-gray-500 mr-2 text-sm" />
                      <input
                        type="password"
                        value={field.value}
                        onChange={(e) => field.onChange(e.target.value)}
                        placeholder={`Enter ${field.label}`}
                        className="w-full outline-none text-sm h-full"
                      />
                    </div>
                    {field.error && <p className="text-red-500 text-[10px]">{field.error}</p>}
                  </div>
                ))}

                <div className="w-[90%] sm:w-[80%] lg:w-[65%]">
                  <label className="text-xs font-semibold block mb-1">Add Licence</label>
                  <input
                    type="file"
                    accept="image/*"
                    className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm"
                  />
                </div>
              </>
            )}

            <div className="flex items-center text-[10px] text-gray-600 w-[90%] sm:w-[80%] lg:w-[65%] mt-1">
              <input
                type="checkbox"
                className="mr-2"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <label>By continuing, you agree to Self Do’s Privacy Policy & Terms of Use</label>
            </div>
            {errors.agree && (
              <p className="text-red-500 text-[10px] w-[90%] sm:w-[80%] lg:w-[65%] -mt-1">{errors.agree}</p>
            )}

            <button
              type="submit"
              className="bg-black text-white h-10 rounded-md hover:bg-gray-800 transition text-sm w-[90%] sm:w-[80%] lg:w-[65%]"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Car Image for Laptop only */}
       <img
  src={selfCar}
  alt="Car"
  className="w-[60%] sm:w-[40%] lg:w-[25%] mx-auto mt-6 lg:mt-0 lg:absolute lg:bottom-[-40px] lg:left-[38%] lg:transform lg:-translate-x-1/2 z-30"
/>

      </div>

      {showPopup && <RegisterSuccessPopup onClose={handlePopupClose} />}
    </div>
  );
};

export default Register;
