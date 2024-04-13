import React from 'react';

const Featurette = () => {
  return (
    <div className="flex shadow-md items-center mb-6 mx-6 rounded-lg p-4 h-32"> {/* Increased height */}
      <div className="flex-shrink-0 mr-4">
        {/* Image */}
        <img src="image-url.jpg" alt="Featurette Image" className="h-24 w-24 rounded-full" /> {/* Rounded image */}
      </div>
      <div className="flex flex-col justify-center"> {/* Center content vertically */}
        {/* Title */}
        <h3 className="text-lg font-medium text-gray-900 mb-2 text-center">Past Papers</h3>
        {/* Button */}
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg mx-auto">Button</button>
      </div>
    </div>
  );
};

export default Featurette;
