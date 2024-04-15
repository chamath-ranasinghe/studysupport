import React from 'react';

const FlashCardInput = () => {
  return (
    <div className="bg-white-100 shadow-lg  mt-16 mx-10 rounded-lg p-4 h-96"> {/* Increased height */}
        <div className='flex flex-col '>
            <div className='bg-gray-300 shadow-md rounded-lg p-3 m-3  '>Enter a Title to the card set</div>
            <div className='grid grid-rows-2 grid-flow-col'>
                <div className='col-span-5 row-span-2 bg-gray-300 shadow-md rounded-lg p-5  m-3  '>Add a descrption</div>
                <div className='col-span-2 bg-gray-300 shadow-md rounded-lg p-3  mb-5 m-3  '>Module Name</div>
                <div className='col-span-2 bg-gray-300 shadow-md rounded-lg p-3  mb-4 m-3  '>Special Tags</div>
            </div>
        </div>
        <div className='grid grid-rows-1 grid-flow-col place-content-between'>
            <div className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 mt-16 m-3 rounded-lg">Ask AI to Create</div>
            <div className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 mt-16 m-3 rounded-lg">Create</div>

        </div>
    </div>
    );
};

export default FlashCardInput;
                