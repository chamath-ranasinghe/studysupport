import React from 'react';

const Card = (props) => {
  return (
    <div className="w-60 h-64 bg-purple-600 shadow-lg rounded-lg p-6 m-2 drop-shadow-md">
      <div className="flex justify-center">
        <div className="w-32 h-32 bg-white rounded-lg mb-10">
          <div className="flex justify-center">
              <img src="image-url.jpg" alt="Card Image" className="h-24 w-24 pt-8" />
            </div>
        </div>
      </div>
      <h2 className="text-center text-white text-2xl font-bold mb-4" style={{ minHeight: '3rem'}}>{props.title}</h2>
    </div>
  );
};

export default Card;
