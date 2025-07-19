import React from "react";
import qrImage from "../../../Assets/Scanner.png"; // हीच फाईल तू टाकली आहेस

export default function GpayForm() {
  return (
    <div className="text-center space-y-4">
      <p className="text-black font-semibold text-base">Pay using QR Code</p>
      <img
        src={qrImage}
        alt="GPay QR Code"
        className="w-48 h-48 object-contain mx-auto border rounded shadow"
      />
    </div>
  );
}
