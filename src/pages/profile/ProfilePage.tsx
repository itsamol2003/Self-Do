import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "../../components/navigation/TopNavbar"; // ✅ तुमचं Header path confirm करा
import Footer from "../../components/navigation/Footer";    // ✅ तुमचं Footer path confirm करा

const MyProfile = () => {
  const navigate = useNavigate();

  const [profileImage, setProfileImage] = useState<string>(
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e"
  );
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Amol Pawar",
    email: "amol@gmail.com",
    phone: "+91 566 884 5478",
    dob: "",
    address: "",
    age: "",
    licenseName: "",
    licenseMobile: "",
    licenseNumber: ""
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* 🔙 Back Button */}
        <button
          className="flex items-center text-[#ff5b00] hover:underline mb-4"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="mr-1" size={18} />
          Back
        </button>

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">My Profile</h1>
          <button
            className="bg-[#ff5b00] text-white px-4 py-2 rounded-md"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Cancel" : "Edit Profile"}
          </button>
        </div>

        <div className="flex items-center gap-6 mb-10">
          <div className="relative flex flex-col items-center group w-32 h-32">
            <div className="relative w-32 h-32">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full rounded-full border-4 border-[#ff5b00] object-cover"
              />
              {/* % Badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#ff5b00] text-white text-xs px-3 py-1 rounded-full shadow-md">
                85%
              </div>

              {/* Image Overlay + File Input */}
              {isEditing && (
                <>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="absolute inset-0 opacity-0 cursor-pointer z-20"
                    title="Change Photo"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-sm text-white z-10 group-hover:opacity-100 transition-opacity">
                    Change Photo
                  </div>
                </>
              )}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold">{formData.name}</h2>
            <p className="text-gray-600">{formData.email}</p>
            <p className="text-gray-600">{formData.phone}</p>
            <span className="inline-block mt-1 bg-[#ff5b00] text-white text-sm px-3 py-1 rounded">
              Verified
            </span>
          </div>
        </div>

        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "Name", name: "name" },
            { label: "Email", name: "email" },
            { label: "Mobile Number", name: "phone" },
            { label: "DOB", name: "dob", type: "date" },
            { label: "Address", name: "address" },
            { label: "Age", name: "age", type: "number" }
          ].map(({ label, name, type = "text" }) => (
            <div key={name}>
              <label className="text-sm text-gray-700">{label}</label>
              <input
                type={type}
                name={name}
                value={formData[name as keyof typeof formData]}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder={`Enter ${label}`}
                className={`w-full mt-1 p-3 bg-white border ${
                  isEditing ? "border-black" : "border-gray-300"
                } rounded-md text-black placeholder:text-gray-500`}
              />
            </div>
          ))}
        </div>

        {/* License Section */}
        <div className="mt-10">
          <h3 className="font-semibold text-gray-700 mb-4">
            Driver’s License Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { placeholder: "Enter Your Name", name: "licenseName" },
              { placeholder: "Enter Mobile number", name: "licenseMobile" },
              { placeholder: "Enter License number", name: "licenseNumber" }
            ].map(({ placeholder, name }) => (
              <input
                key={name}
                type="text"
                placeholder={placeholder}
                name={name}
                value={formData[name as keyof typeof formData]}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full p-3 bg-white border ${
                  isEditing ? "border-black" : "border-gray-300"
                } rounded-md text-black placeholder:text-gray-500`}
              />
            ))}
          </div>
        </div>

        {/* Save Button */}
        {isEditing && (
          <div className="mt-8 text-right">
            <button
              className="bg-[#ff5b00] text-white px-6 py-3 rounded-md"
              onClick={handleSubmit}
            >
              Save Changes
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MyProfile;
