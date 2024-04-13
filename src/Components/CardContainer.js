import React from 'react';
import Card from './Card';

const CardContainer = () => {
  return (
    <div className="flex justify-center">
      <div className="flex">
        <div className="w-full md:w-1/4">
          <Card />
        </div>
        <div className="w-full md:w-1/4">
          <Card />
        </div>
        <div className="w-full md:w-1/4">
          <Card />
        </div>
        <div className="w-fullw md:w-1/4">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
