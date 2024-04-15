import React, { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none"
        onClick={toggleChatbot}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zM12 6a6 6 0 100 12 6 6 0 000-12z"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg p-4 w-80">
          <div className="text-gray-800 bg-gray-100">
            <div className='bg-gray-200 h-80 rounded-lg'>
                <div className='bg-gray-100 h-10 w-60 rounded-lg'>

                </div>
            </div>
          </div>
          {/* Add your chat window content here */}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
