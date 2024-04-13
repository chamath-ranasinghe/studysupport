import React from 'react';

const IntoCard = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-purple-600 w-full h-30 overflow-hidden shadow-lg">
      <img className="w-full h-full object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-white mb-2">This is Sam's Site</div>
        <p className="text-gray-300 text-base">Make your studies easy, just connect your moodle account and off you go..</p>
      </div>
    </div>
  );
};

export default IntoCard;
