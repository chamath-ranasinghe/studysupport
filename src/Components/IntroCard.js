import React from 'react';

const IntoCard = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 from-10% via-purple-600 via-50% to-purple-600 to-90% w-full h-96 shadow-lg">
      
      <div className="px-6 py-4 justify-items-start">
        <div className="font-bold text-5xl text-white mt-16 m-10">This is Sam's Site</div>
        <p className="text-gray-300 text-lg ml-10">Make your studies easy, just connect your moodle account and off you go..</p>
      </div>
      <div className="justify-items-end">
       <img className="w-full h-full object-cover" src={imageUrl} alt={title} />
      </div>
      
    </div>
  );
};

export default IntoCard;
