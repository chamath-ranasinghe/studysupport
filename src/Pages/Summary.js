import React, { useState } from 'react';
import Navbar from "../Components/NavBar";


const Summary = () => {
  const [moduleName, setModuleName] = useState('');
  const [lectureSlide, setLectureSlide] = useState('');

  const handleModuleChange = (e) => {
    setModuleName(e.target.value);
  };

  const handleSlideChange = (e) => {
    setLectureSlide(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Select Module and Lecture Slides</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="module">
              Module Name
            </label>
            <select
              id="module"
              value={moduleName}
              onChange={handleModuleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select a module</option>
              <option value="module1">Module 1</option>
              <option value="module2">Module 2</option>
              <option value="module3">Module 3</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="slides">
              Lecture Slides
            </label>
            <select
              id="slides"
              value={lectureSlide}
              onChange={handleSlideChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select lecture slides</option>
              <option value="slides1">Lecture Slides 1</option>
              <option value="slides2">Lecture Slides 2</option>
              <option value="slides3">Lecture Slides 3</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Summary;
