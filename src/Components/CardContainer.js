import React from 'react';
import Card from './Card';

/* Import icons */
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/solid'
import { BookOpenIcon } from '@heroicons/react/24/solid'
import { RectangleStackIcon } from '@heroicons/react/24/solid'
import { PlayCircleIcon } from '@heroicons/react/24/solid'

const CardContainer = () => {
  return (
    <div className="flex justify-center mt-48 mb-10">
      <div className="flex">
        <div className="w-full mx-8">
          <Card title={"Chatbot"}><ChatBubbleLeftEllipsisIcon className="h-24 w-24 pt-8"/></Card>
        </div>
        <div className="w-full mx-8">
          <Card title={"Past Papers"}><BookOpenIcon className="h-24 w-24 pt-8"/></Card>
        </div>
        <div className="w-full mx-8">
         <Card title={"Flashcards"}><RectangleStackIcon className="h-24 w-24 pt-8"/></Card>
      </div>
        <div className="w-full mx-8">
          <Card title={"External Resources"}><PlayCircleIcon className="h-24 w-24 pt-8"/></Card>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
