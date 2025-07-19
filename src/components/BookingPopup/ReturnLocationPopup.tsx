import React, { useState, useEffect } from "react";

interface ReturnLocationPopupProps {
  show: boolean;
  onClose: () => void;
  onSameLocation: () => void;
  onChooseDifferent: () => void;
}

const ReturnLocationPopup: React.FC<ReturnLocationPopupProps> = ({
  show,
  onClose,
  onSameLocation,
  onChooseDifferent,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [durationDays, setDurationDays] = useState<number>(0);
  const farePerDay = 1000;

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const timeDiff = end.getTime() - start.getTime();
      const days = Math.ceil(timeDiff / (1000 * 3600 * 24));
      setDurationDays(days > 0 ? days : 0);
    }
  }, [startDate, endDate]);

  if (!show) return null;

return (
  <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex justify-center items-center px-4">
    <div className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto shadow-lg space-y-6">
      <h2 className="text-xl font-semibold text-center">Return Location</h2>

      {/* Radio Options */}
      <div className="space-y-4">
        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="returnLocation"
            value="same"
            checked={selectedOption === "same"}
            onChange={() => setSelectedOption("same")}
            className="accent-orange-500"
          />
          <span className="text-sm sm:text-base">Same as delivery location</span>
        </label>

        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="returnLocation"
            value="different"
            checked={selectedOption === "different"}
            onChange={() => setSelectedOption("different")}
            className="accent-orange-500"
          />
          <span className="text-sm sm:text-base">Choose different location</span>
        </label>
      </div>

      {/* Date Inputs */}
      {selectedOption && (
        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Duration & Fare */}
          {startDate && endDate && durationDays > 0 && (
            <div className="bg-gray-100 p-4 rounded-lg text-sm sm:text-base space-y-1">
              <div><strong>Duration:</strong> {durationDays} day(s)</div>
              <div><strong>Fare:</strong> ₹{durationDays * farePerDay}</div>
            </div>
          )}
        </div>
      )}

      {/* Submit Button */}
      <div className="text-right pt-4">
        <button
          disabled={!selectedOption}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-sm sm:text-base disabled:opacity-50 transition"
          onClick={() => {
            if (selectedOption === "same") onSameLocation();
            else if (selectedOption === "different") onChooseDifferent();
            onClose();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  </div>
);

};

export default ReturnLocationPopup;
