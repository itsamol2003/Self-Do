import React, { useState, useEffect } from "react";

interface Props {
  onClose: () => void;
  onConfirm: (location: string, lat: number, lon: number) => void;
}

const LocationModal: React.FC<Props> = ({ onClose, onConfirm }) => {
  const [location, setLocation] = useState("");
  const [lat, setLat] = useState<number | null>(null);
  const [lon, setLon] = useState<number | null>(null);
  const [mapUrl, setMapUrl] = useState<string>("");

  const locationIQKey = "pk.4d000b3fc82dffaf33843be1e3bd2166"; // ✅ तुझा API key

  useEffect(() => {
    if (lat && lon) {
      const url = `https://maps.locationiq.com/v3/staticmap?key=${locationIQKey}&center=${lat},${lon}&zoom=14&size=600x300&markers=icon:small-red-cutout|${lat},${lon}`;
      setMapUrl(url);
    }
  }, [lat, lon]);

  // ✅ 1. Get Current Location with full address using Reverse Geocoding
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLat(latitude);
        setLon(longitude);

        try {
          const res = await fetch(
            `https://us1.locationiq.com/v1/reverse?key=${locationIQKey}&lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await res.json();
          const fullAddress = data.display_name || "Current Location";
          setLocation(fullAddress);
        } catch (err) {
          alert("Failed to fetch address");
        }
      },
      () => {
        alert("Unable to fetch current location");
      }
    );
  };

  // ✅ 2. Manual search — get lat/lon from text
  const handleSearchLocation = async () => {
    if (!location.trim()) return alert("Enter location to search");
    try {
      const res = await fetch(
        `https://us1.locationiq.com/v1/search?key=${locationIQKey}&q=${location}&format=json`
      );
      const data = await res.json();
      if (data && data[0]) {
        setLat(parseFloat(data[0].lat));
        setLon(parseFloat(data[0].lon));
        setLocation(data[0].display_name); // set full address
      } else {
        alert("Location not found");
      }
    } catch (err) {
      alert("Failed to search location");
    }
  };

  const handleConfirm = () => {
    if (!location || lat === null || lon === null) {
      alert("Please enter or fetch your location");
      return;
    }
    onConfirm(location, lat, lon);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Select Your Location</h2>

        {/* Input + Search */}
        <div className="flex mb-3 gap-2">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter city or area"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
          />
          <button
            onClick={handleSearchLocation}
            className="bg-blue-500 text-white text-sm px-3 rounded-md"
          >
            Search
          </button>
        </div>

        {/* Current Location */}
        <button
          onClick={getCurrentLocation}
          className="text-sm bg-gray-800 text-white px-4 py-2 rounded-md mb-4"
        >
          Use Current Location
        </button>

        {/* Static Map */}
        {mapUrl && (
          <div className="mb-4">
            <img
              src={mapUrl}
              alt="Selected Location"
              className="rounded-lg w-full"
            />
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-md text-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 bg-green-600 text-white rounded-md text-sm"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
