import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    alert(`OTP sent to ${email}`);
    setOtpSent(true);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp) return;
    alert(`OTP verified`);
    setOtpVerified(true);
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPassword || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // 🔐 Password Reset Logic (API call) here
    alert("Password reset successful");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold text-center mb-4">Forgot Password</h2>

        {!otpSent && (
          <p className="text-sm text-gray-600 text-center mb-6">
            Enter your registered email to receive OTP.
          </p>
        )}

        <form
          onSubmit={
            !otpSent
              ? handleSendOtp
              : !otpVerified
              ? handleVerifyOtp
              : handleResetPassword
          }
          className="space-y-4"
        >
          {/* Email */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none"
            required
            disabled={otpSent}
          />

          {/* OTP Input */}
          {otpSent && !otpVerified && (
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none"
              required
            />
          )}

          {/* New Password Inputs */}
          {otpVerified && (
            <>
              <input
                type="password"
                placeholder="Enter New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none"
                required
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none"
                required
              />
            </>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md text-sm"
          >
            {!otpSent
              ? "Send OTP"
              : !otpVerified
              ? "Verify OTP"
              : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassPage;
