import React from "react";

export default function DebitCardForm() {
  return (
    <form className="space-y-4 text-white">
      <input
        placeholder="XXXX XXXX XXXX"
        className="bg-white border border-/20 px-4 py-2 rounded w-full text-sm placeholder-black/50"
      />
      <input
        placeholder="Enter Your Name"
        className="bg-white  border border-white/20 px-4 py-2 rounded w-full text-sm placeholder-black/50"
      />
      <div className="flex gap-4">
        <input
          placeholder="MM/YY"
          className="bg-white border border-white/20 px-4 py-2 rounded w-1/2 text-sm placeholder-black/50"
        />
        <input
          placeholder="3 digits"
          className="bg-white border border-white/20 px-4 py-2 rounded w-1/2 text-sm placeholder-black/50"
        />
      </div>
      <button className="bg-[#F35B04] w-full py-2 rounded text-white font-semibold">
        Pay ₹3,118
      </button>
    </form>
  );
}
