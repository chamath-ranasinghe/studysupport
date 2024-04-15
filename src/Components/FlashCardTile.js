import React from 'react';

import CrossImg from "../Assets/Images/cross-small.png";

const FlashCardTile = (props) => {
  return (
    <div className="bg-white shadow-lg  mt-16 mx-10 rounded-lg p-4 h-28"> {/* Increased height */}
        <div className='grid grid-cols-10 grid-flow-col'>
            <div className='col-span-1 mt-5'>
            {/*Number */}
            <h5 className='text-md font-bold text-black'>{props.number}</h5></div>
            <div className='col-span-5 bg-gray-300 border-2 border-b-black shadow-md rounded-lg p-4  mb-5 mt-3 mx-8 '>Enter Term</div>
            <div className='col-span-5 bg-gray-300 border-2 border-b-black shadow-md rounded-lg p-4  mb-5 mt-3  '>Enter Definition</div>
            <div className='col-span-1 bg-gray-300 border-2 border-b-black shadow-md rounded-lg p-4  mb-5 mt-3  '></div>
        </div>
    </div>
  );
};

export default FlashCardTile;