import React from 'react';

const Featurette = () => {
  return (
    <div className="w-full flex bg-gray-100 shadow-lg justify-around items-center mb-10 rounded-lg p-4 h-64"> {/* Increased height */}
      <div className="flex-shrink-0">
        {/* Image */}
        <img src="image-url.jpg" alt="Featurette Image" className="h-32 w-32 rounded-full" /> {/* Rounded image */}
      </div>
      <div className="flex flex-col justify-center items-center"> {/* Center content vertically and horizontally */}
        {/* Title */}
        <h3 className="text-5xl font-bold text-gray-900 mb-8">Past Papers</h3>
        {/* Button */}
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg">Button</button>
      </div>
    </div>
  );
};

export default Featurette;

