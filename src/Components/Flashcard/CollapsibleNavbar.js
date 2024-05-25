import React from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

const CollapsibleNavbar = ({ isNavOpen, toggleNav}) => {

    const navigate = useNavigate();
  return (
    <>
      {/* Arrow icon to toggle the navbar */}
      <button
        className={`fixed top-1/2 left-0 z-50 bg-purple-600 hover:bg-purple-500 text-white p-3 rounded-full shadow-lg transform -translate-y-1/2 ${isNavOpen ? 'ml-64' : ''}`}
        onClick={toggleNav}
      >
        {isNavOpen ? <ChevronLeftIcon className="h-6 w-6" /> : <ChevronRightIcon className="h-6 w-6" />}
      </button>

      {/* Collapsible Navbar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${isNavOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Menu</h2>
          <button
            className="w-full bg-purple-600 hover:bg-purple-500 text-white p-3 rounded-lg mb-4"
            onClick={() => navigate("/flashcardpage")}
          >
            Create Flashcards
          </button>
          <button
            className="w-full bg-purple-600 hover:bg-purple-500 text-white p-3 rounded-lg"
            onClick={() => navigate("/viewflashcard")}
          >
            View Flashcards
          </button>
        </div>
      </div>
    </>
  );
};

export default CollapsibleNavbar;
