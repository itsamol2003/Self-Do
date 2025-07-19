import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface MapPopupProps {
  show: boolean;
  onClose: (coords?: { lat: number; lon: number } | null) => void;
}

const MapPopup: React.FC<MapPopupProps> = ({ show, onClose }) => {
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);
  const [address, setAddress] = useState<string>("Fetching location...");
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState("");

  const handleUseCurrentLocation = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ lat: latitude, lon: longitude });

        try {
          const res = await fetch(
            `https://us1.locationiq.com/v1/reverse?key=pk.4d000b3fc82dffaf33843be1e3bd2166&lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await res.json();
          setAddress(data.display_name || "Address not found");
        } catch {
          setAddress("Address could not be fetched.");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setAddress("Could not get your current location.");
        setCoords(null);
        setLoading(false);
      }
    );
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    setLoading(true);

    try {
      const res = await fetch(
        `https://us1.locationiq.com/v1/search?key=pk.4d000b3fc82dffaf33843be1e3bd2166&q=${encodeURIComponent(
          searchQuery
        )}&format=json`
      );
      const data = await res.json();

      if (data && data.length > 0) {
        const { lat, lon, display_name } = data[0];
        setCoords({ lat: parseFloat(lat), lon: parseFloat(lon) });
        setAddress(display_name);
      } else {
        setAddress("No results found.");
        setCoords(null);
      }
    } catch {
      setAddress("Error searching location.");
      setCoords(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (show) handleUseCurrentLocation();
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-start sm:items-center bg-black/30 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-lg p-4 w-full max-w-2xl mx-4 my-10 shadow-xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Confirm Your Location</h2>

        {/* 🔍 Search Box */}
        <div className="flex mb-4 gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter delivery location"
            className="flex-1 px-3 py-2 border rounded border-gray-300 text-sm"
          />
          <button
            onClick={handleSearch}
            className="bg-orange-500 text-white px-4 rounded hover:bg-orange-600 text-sm"
          >
            Search
          </button>
        </div>

        {/* 📍 Use Current Location */}
        <button
          onClick={handleUseCurrentLocation}
          className="flex items-center gap-2 border px-4 py-2 rounded text-sm mb-4 hover:bg-gray-50"
        >
          <span className="text-lg">📍</span> Use My Current Location
        </button>

        {/* 🗺️ Map */}
        <div className="h-[300px] rounded overflow-hidden mb-4">
          {loading ? (
            <div className="flex justify-center items-center h-full text-gray-500">
              Loading map...
            </div>
          ) : coords ? (
            <MapContainer
              key={coords.lat}
              center={[coords.lat, coords.lon]}
              zoom={15}
              scrollWheelZoom={false}
              className="h-full w-full z-0"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[coords.lat, coords.lon]} icon={markerIcon} />
            </MapContainer>
          ) : (
            <div className="flex justify-center items-center h-full text-gray-500">
              Unable to load map.
            </div>
          )}
        </div>

        {/* 📍 Address */}
        <div className="text-sm text-gray-700 mb-4">
          <strong>Address:</strong> {address}
        </div>

        {/* ✅ Confirm Button */}
        <div className="text-right">
          <button
            onClick={() => onClose(coords)}
            className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600"
          >
            Confirm Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapPopup;
