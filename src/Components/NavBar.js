import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center">
            <a href="/" className="text-white font-bold text-lg">MyWebsite</a>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
