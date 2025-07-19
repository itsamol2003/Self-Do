import React from "react";
import { useNavigate } from "react-router-dom";

interface AgreeAndContinuePopupProps {
  show: boolean;
}

const AgreeAndContinuePopup: React.FC<AgreeAndContinuePopupProps> = ({ show }) => {
  const navigate = useNavigate();

  if (!show) return null;

  const handleAgree = () => {
    navigate("/payment/faredetails");
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex justify-center items-center">
      <div className="bg-white rounded-xl p-6 w-[90%] max-w-lg shadow-xl">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Note Before You Proceed
        </h2>
        <p className="text-gray-600 mb-5 text-sm">
          To ensure a smooth handover of the vehicle, please note that you must be
          physically present at the time of delivery and provide the following valid documents:
        </p>

        <ul className="text-left space-y-4 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-green-600">✔</span>
            <div>
              <strong>Valid Driving Licence</strong><br />
              <span className="text-gray-500">
                Issued at least 6 months ago (original or from DigiLocker)
              </span>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600">✔</span>
            <div>
              <strong>Identity Proof – Aadhaar or Passport</strong><br />
              <span className="text-gray-500">
                Acceptable in original, copy, or DigiLocker format
              </span>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600">✔</span>
            <div>
              <strong>Minimum Age Requirement</strong><br />
              <span className="text-gray-500">
                You must be 21 years or older (as per your driving licence)
              </span>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600">✔</span>
            <div>
              <span className="text-gray-500">
                I understand that failure to provide these documents at the time of delivery may
                result in the booking being cancelled and a fee of up to ₹5,000 being charged.
              </span>
            </div>
          </li>
        </ul>

        <button
          onClick={handleAgree}
          className="mt-6 w-full bg-orange-500 text-white py-2 rounded-md text-sm hover:bg-orange-600 transition"
        >
          Agree and Continue
        </button>

        <p className="text-[11px] text-gray-400 mt-3 text-center">
          By proceeding, you confirm your agreement with our terms and conditions.
        </p>
      </div>
    </div>
  );
};

export default AgreeAndContinuePopup;
