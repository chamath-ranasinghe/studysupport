import React from 'react';
import Card from './Card';

const CardContainer = () => {
  return (
    <div className="flex justify-center mt-48 mb-10">
      <div className="flex">
        <div className="w-full mx-8">
          <Card title={"Chatbot"}/>
        </div>
        <div className="w-full mx-8">
          <Card title={"Past Papers"}/>
        </div>
        <div className="w-full mx-8">
          <Card title={"Flashcards"}/>
        </div>
        <div className="w-full mx-8">
          <Card title={"External Resources"}/>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
