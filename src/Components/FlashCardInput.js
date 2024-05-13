import React, { useState} from 'react';


const FlashCardInput = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const items = props.data;
  console.log(items);
//   const items = [
//     { key: 'Option 1', value: 'value1' },
//     { key: 'Option 2', value: 'value2' },
//     { key: 'Option 3', value: 'value3' }
//   ];

  const handleSelect = (key) => {
    setSelectedItem(key);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div className="bg-white-100 shadow-lg mt-16 mx-10 rounded-lg p-4 relative">
      <div className='flex flex-col'>
        <div className='bg-gray-300 shadow-md rounded-lg p-3 m-3'>Enter a Title to the card set</div>
        <div className='grid grid-rows-2 grid-flow-col'>
          <div className='col-span-5 row-span-2 bg-gray-300 shadow-md rounded-lg p-5 m-3'>Add a description</div>
          <div
            className='col-span-2 bg-gray-300 shadow-md rounded-lg p-3 mb-5 m-3 cursor-pointer relative'
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedItem ? (
              <div>{selectedItem}</div>
            ) : (
              <div>Module Name</div>
            )}
            {isOpen && (
              <div className="absolute top-full left-0 z-10 w-full bg-white shadow-lg rounded-lg mt-1">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                    onClick={() => handleSelect(item.fullname)}
                  >
                    {item.fullname}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className='col-span-2 bg-gray-300 shadow-md rounded-lg p-3 mb-4 m-3'>Special Tags</div>
        </div>
      </div>
      <div className='grid grid-rows-1 grid-flow-col place-content-between'>
        <div className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 m-3 rounded-lg">Ask AI to Create</div>
        <div className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 m-3 rounded-lg">Create</div>
      </div>
    </div>
  );
};

export default FlashCardInput;
