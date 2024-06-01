// FileSelectorOverlay.js
import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

const FileSelectorOverlay = ({ files, onClose, setSelectedFile, handleAICreate }) => {

  const [selectedFileName, setSelectedFileName] = useState("");   

  const handleFileChange = (e) => {
    setSelectedFileName(e.target.value);
    const selectedFile = files.find(file => file.fileurl === e.target.value);
    setSelectedFile(selectedFile.fileurl);
  };

  const handleSubmit = () => {
    handleAICreate();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-md w-full">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold mb-4">Select the file you want to use</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="file-selector">
            File
          </label>
          <select
            id="file-selector"
            className="block w-full border border-gray-300 rounded-md p-2"
            value={selectedFileName}
            onChange={handleFileChange}
          >
            <option value="" disabled>Select a file</option>
            {files.map((file, index) => (
              <option key={index} value={file.fileurl}>
                {file.filename}
              </option>
            ))}
          </select>
        </div>
        <button
          className="bg-purple-500 text-white p-3 rounded-lg shadow-lg w-full"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FileSelectorOverlay;
