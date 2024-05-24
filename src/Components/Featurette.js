import React from 'react';

const Featurette = (props) => {
  return (
    <div className="w-full grid grid-cols-2 place-content-around bg-gray-100 shadow-lg  mb-10 rounded-lg p-4 h-80"> {/* Increased height */}
      <div className="flex flex-shrink-0 justify-center">
        {/* Image */}
        <img src={props.image} alt="Featurette Image" className="h-48 w-48" /> {/* Rounded image */}
      </div>
      <div className="flex flex-col justify-center items-center mr-30"> {/* Center content vertically and horizontally */}
        {/* Title */}
        <h3 className="text-5xl font-bold text-gray-900 mb-8">{props.title}</h3>
        {/* Children */}
        {props.children}
      </div>
    </div>
  );
};

export default Featurette;

