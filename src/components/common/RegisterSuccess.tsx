// components/common/RegisterSuccessPopup.tsx
import React from "react";

interface RegisterSuccessPopupProps {
  onClose: () => void;
}

const RegisterSuccessPopup: React.FC<RegisterSuccessPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-xl w-[90%] max-w-sm text-center">
        <h2 className="text-lg font-semibold text-green-600 mb-2">Registration Successful!</h2>
        <p className="text-sm text-gray-700 mb-4">You have successfully signed up.</p>
        <button
          onClick={onClose}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default RegisterSuccessPopup;
