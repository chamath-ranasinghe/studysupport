import React from 'react';

const Card = (props) => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 place-content-around w-60 h-64 bg-purple-600 shadow-lg rounded-lg p-6 m-2 drop-shadow-md">
      <div className="flex justify-center">
        <div className="w-32 h-32 bg-white rounded-lg">
          <div className="flex justify-center">
              <img src="image-url.jpg" alt="Card Image" className="h-24 w-24 pt-8" />
            </div>
        </div>
      </div>
      <div className="grid content-center mt-12">
      <h2 className="text-center text-white text-2xl font-bold">{props.title}</h2>
      </div>
    </div>
  );
};

export default Card;


