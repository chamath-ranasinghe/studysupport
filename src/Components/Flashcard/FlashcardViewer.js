import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const FlashcardViewer = ({ flashcard, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    if (currentIndex < flashcard.flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false); // Reset flip state when changing card
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false); // Reset flip state when changing card
    }
  };

  const currentCard = flashcard.flashcards[currentIndex];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-3xl w-full">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold mb-4">{flashcard.title}</h2>
        <div className="flex items-center justify-between mb-4">
          <button
            className={`p-2 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
          </button>
          <button
            className={`p-2 ${currentIndex === flashcard.flashcards.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleNext}
            disabled={currentIndex === flashcard.flashcards.length - 1}
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="relative w-full h-64">
          <div
            className={`absolute w-full h-full rounded-lg shadow-lg transform transition-transform duration-500 ${isFlipped ? 'rotate-y-180' : ''}`}
          >
            <div
              className={`absolute inset-0 flex items-center justify-center backface-hidden bg-white rounded-lg p-4 border-2 border-gray-200 ${isFlipped ? 'opacity-0' : 'opacity-100'}`}
            >
              <p className="text-xl font-bold">{currentCard.term}</p>
            </div>
            <div
              className={`absolute inset-0 flex items-center justify-center backface-hidden bg-white rounded-lg p-4 border-2 border-gray-200 transform rotate-y-180 ${isFlipped ? 'opacity-100' : 'opacity-0'}`}
            >
              <p className="text-xl font-bold">{currentCard.definition}</p>
            </div>
          </div>
        </div>
        <button
          className="mt-4 bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600"
          onClick={handleFlip}
        >
          Flip
        </button>
      </div>
    </div>
  );
};

export default FlashcardViewer;
