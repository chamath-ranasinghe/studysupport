import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

const FlashCardTile = (props) => {
  return (
    <div className="bg-white shadow-lg mt-16 mx-10 rounded-lg p-4 h-28"> {/* Increased height */}
      <div className='grid grid-cols-10 grid-flow-col'>
        <div className='col-span-1 mt-5'>
          {/* Number */}
          <h5 className='text-md font-bold text-black'>{props.number}</h5>
        </div>
        <input
          type="text"
          placeholder="Enter Term"
          className='col-span-5 bg-gray-300 border-2 border-b-black shadow-md rounded-lg p-4 mb-5 mt-3 mx-8'
          value={props.term}
          onChange={props.sendTermToParent}
        />
        <input
          type="text"
          placeholder="Enter Definition"
          className='col-span-5 bg-gray-300 border-2 border-b-black shadow-md rounded-lg p-4 mb-5 mt-3'
          value={props.definition}
          onChange={props.sendDefinitionToParent}
        />
        <button className='col-span-1 bg-red-500 hover:bg-red-400 border-2 border-b-black shadow-md rounded-lg p-4 mb-5 mt-3 flex justify-center items-center' onClick={props.removeCard}>
          <XMarkIcon className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default FlashCardTile;
