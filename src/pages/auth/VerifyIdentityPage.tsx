import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Upload } from 'lucide-react';

const VerifyIdentityPage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const { verifyIdentity } = useAuth();
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!selectedFile) {
      return setError("Please upload your driver's license.");
    }

    setIsLoading(true);

    const progressInterval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 300);

    try {
      await verifyIdentity(selectedFile);
      clearInterval(progressInterval);
      setUploadProgress(100);
      setTimeout(() => navigate('/dashboard'), 600);
    } catch (err) {
      setError('Failed to verify identity. Please try again.');
      clearInterval(progressInterval);
      setUploadProgress(0);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Verify Your Identity</h2>
          <p className="text-sm text-gray-500 mt-1">
            Upload your driver's license to continue renting vehicles
          </p>
        </div>

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div
            className="border-2 border-dashed border-gray-300 p-6 text-center rounded-lg hover:bg-gray-50 transition relative"
            onClick={() => document.getElementById('license-upload')?.click()}
          >
            <Upload className="mx-auto text-indigo-500 mb-2" size={36} />
            <p className="text-gray-700 font-medium">Click or drag to upload your license</p>
            <p className="text-xs text-gray-400">Accepted: JPG, PNG (Max 5MB)</p>
            <input
              type="file"
              accept="image/*"
              id="license-upload"
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>

          {selectedFile && (
            <div className="text-green-700 text-sm bg-green-100 px-4 py-2 rounded">
              ✅ File selected: <span className="font-medium">{selectedFile.name}</span>
            </div>
          )}

          {isLoading && (
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-indigo-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              ></div>
              <p className="text-sm text-center mt-1 text-gray-500">{uploadProgress}% uploading...</p>
            </div>
          )}

          <div className="flex items-start text-sm text-gray-600">
            <input
              type="checkbox"
              required
              className="mt-1 mr-2 border-gray-300 rounded"
              id="consent"
            />
            <label htmlFor="consent">
              I confirm that my license is valid and up to date.
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition"
          >
            {isLoading ? 'Verifying...' : 'Verify Identity'}
          </button>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Your document will be securely stored and used only for identity verification.
            See our{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default VerifyIdentityPage;
