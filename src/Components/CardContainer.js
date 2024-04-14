import React from 'react';
import Card from './Card';

const CardContainer = () => {
  return (
    <div className="flex justify-center mt-48 mb-10">
      <div className="flex">
        <div className="w-full mx-8">
          <Card />
        </div>
        <div className="w-full mx-8">
          <Card />
        </div>
        <div className="w-full mx-8">
          <Card />
        </div>
        <div className="w-full mx-8">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
