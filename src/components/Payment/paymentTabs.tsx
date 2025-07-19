import React from "react";

const tabs = [
  { id: "card", label: "Debit Card", color: "#F35B04" },
  { id: "gpay", label: "GPay" },
  { id: "phonepe", label: "PhonePe" },
];

export default function PaymentTabs({ active, onChange }: any) {
  return (
    <div className="flex gap-4 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`px-6 py-2 rounded-md border text-sm flex items-center gap-2 ${
            active === tab.id
              ? "bg-[#F35B04] text-white"
              : "bg-black border-white/20 text-white"
          }`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
