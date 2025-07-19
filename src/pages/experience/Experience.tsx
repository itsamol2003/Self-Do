import React, { useState } from 'react';

// Shared Styles for All Components
const sharedBoxStyles = "p-8 bg-gradient-to-r from-blue-200 via-indigo-100 to-pink-200 text-gray-800 rounded-lg shadow-lg mb-8 backdrop-blur-sm";

// Terms & Conditions Agreement Component
const TermsAgreement: React.FC = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAcceptTerms = () => {
    setIsAgreed(true);
    alert('Terms Accepted. You can proceed with the booking!');
    setIsFormVisible(false);
  };

  const handleDeclineTerms = () => {
    setIsAgreed(false);
    alert('You must accept the terms to proceed.');
    setIsFormVisible(false);
  };

  const handleOpenAgreement = () => {
    setIsFormVisible(true);
  };

  return (
    <div className={sharedBoxStyles}>
      <h2 className="text-xl font-semibold mb-4">Terms and Conditions Agreement</h2>

      {!isAgreed && !isFormVisible && (
        <div>
          <p className="mb-4">Please read and accept the terms and conditions to proceed with the booking.</p>
          <button
            onClick={handleOpenAgreement}
            className="px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Read Terms & Conditions
          </button>
        </div>
      )}

      {isFormVisible && !isAgreed && (
        <div className="bg-white p-6 rounded-lg mt-6 shadow-xl opacity-95">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Please read the Terms and Conditions:</h3>
          <p className="text-lg text-gray-600 mb-4">
            1. The car must be returned on time, as per the rental agreement.<br />
            2. Any damage to the vehicle must be reported immediately.<br />
            3. The security deposit will be refunded at the end of the rental.<br />
            4. Fuel charges are not included in the rental fee.<br />
            5. You are responsible for the vehicle during the rental period.<br />
          </p>

          <div className="flex justify-between mt-6">
            <button
              onClick={handleAcceptTerms}
              className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
            >
              Accept Terms
            </button>
            <button
              onClick={handleDeclineTerms}
              className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
            >
              Decline Terms
            </button>
          </div>
        </div>
      )}

      {isAgreed && <p className="text-green-600 mt-4">You have successfully accepted the terms and can proceed with your booking.</p>}
    </div>
  );
};

// Mobile Key & Pickup Instructions Component
const PickupInstructions: React.FC = () => {
  const showMobileKey = () => alert('Your mobile key is: 123456789');

  return (
    <div className={sharedBoxStyles}>
      <h2 className="text-xl font-semibold mb-4">Pickup Instructions</h2>
      <p className="text-lg mb-4">Your car is available at the pickup location. Show this page to the staff to get the keys.</p>
      <button
        onClick={showMobileKey}
        className="px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
      >
        Show Mobile Key
      </button>
    </div>
  );
};

// Report Vehicle Issue or Damages Component
const VehicleIssueReport: React.FC = () => {
  const [issueDescription, setIssueDescription] = useState('');

  const handleReport = () => {
    console.log('Reported issue:', issueDescription);
    alert('Issue reported');
  };

  return (
    <div className={sharedBoxStyles}>
      <h2 className="text-xl font-semibold mb-4">Report Vehicle Issue</h2>
      <textarea
        value={issueDescription}
        onChange={(e) => setIssueDescription(e.target.value)}
        rows={5}
        className="w-full border p-4 rounded-md mb-4 text-gray-800"
        placeholder="Describe the issue"
      />
      <button
        onClick={handleReport}
        className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
      >
        Report Issue
      </button>
    </div>
  );
};

// Extend Rental Period Component
const RentalPeriodExtension: React.FC = () => {
  const [newReturnDate, setNewReturnDate] = useState('');

  const handleExtend = () => {
    alert(`Rental extended to ${newReturnDate}`);
  };

  return (
    <div className={sharedBoxStyles}>
      <h2 className="text-xl font-semibold mb-4">Extend Rental Period</h2>
      <input
        type="date"
        value={newReturnDate}
        onChange={(e) => setNewReturnDate(e.target.value)}
        className="w-full border p-4 rounded-md mb-4 text-gray-800"
      />
      <button
        onClick={handleExtend}
        className="px-8 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition duration-300"
      >
        Extend Rental
      </button>
    </div>
  );
};

// Roadside Assistance Component
const RoadsideHelpRequest: React.FC = () => {
  const handleRequestAssistance = () => {
    alert('Contacting roadside assistance...');
  };

  return (
    <div className={sharedBoxStyles}>
      <h2 className="text-xl font-semibold mb-4">Roadside Assistance</h2>
      <p className="text-lg mb-4">If you need assistance, please contact:</p>
      <p className="font-semibold">Phone: 123-456-7890</p>
      <button
        onClick={handleRequestAssistance}
        className="px-8 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300 mt-4"
      >
        Request Assistance
      </button>
    </div>
  );
};

// Main Experience Component
const Experience: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Self-Drive Experience</h1>
      <div className="space-y-8">
        <TermsAgreement />
        <PickupInstructions />
        <VehicleIssueReport />
        <RentalPeriodExtension />
        <RoadsideHelpRequest />
      </div>
    </div>
  );
};

export default Experience;
