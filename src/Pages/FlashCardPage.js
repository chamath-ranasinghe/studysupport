import { useContext, useState } from "react";
import FlashCardInput from "../Components/FlashCardInput";
import FlashCardTile from "../Components/FlashCardTile";
import Navbar from "../Components/NavBar";
import { DataContext } from "../routes/UserRoute";
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';
import { useNavigate } from "react-router-dom";
import CollapsibleNavbar from "../Components/Flashcard/CollapsibleNavbar";
import CreatedBox from "../Components/Flashcard/CreatedBox";

function FlashCardPage() {
  const data = useContext(DataContext);
  const [flashcards, setFlashcards] = useState([]);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCreated, setIsCreated] = useState(false);

  const navigate = useNavigate();

  const addFlashcard = () => {
    setFlashcards(flashcards => [...flashcards, { term: '', definition: '' }]);
  };

  const handleTermChange = (index, newTerm) => {
    setFlashcards(prevCards =>
      prevCards.map((card, i) =>
        i === index ? { ...card, term: newTerm } : card
      )
    );
  };

  const handleDefinitionChange = (index, newDefinition) => {
    setFlashcards(prevCards =>
      prevCards.map((card, i) =>
        i === index ? { ...card, definition: newDefinition } : card
      )
    );
  };

  const handleRemoveCard = (index) => {
    setFlashcards(prevCards => prevCards.filter((_, i) => i !== index));
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="relative">
      <Navbar />
      <FlashCardInput items={data} flashcards={flashcards} isCreated={setIsCreated} />

      <div className={`transition-opacity duration-300 ${isNavOpen ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
        {flashcards.map((card, index) => (
          <FlashCardTile
            key={index}
            number={index + 1}
            term={card.term}
            definition={card.definition}
            sendTermToParent={(e) => handleTermChange(index, e.target.value)}
            sendDefinitionToParent={(e) => handleDefinitionChange(index, e.target.value)}
            removeCard={() => handleRemoveCard(index)}
          />
        ))}

        <button
          className="flex justify-center items-center bg-white shadow-lg my-10 mx-10 rounded-lg p-4 h-28"
          style={{ width: "94vw" }}
          onClick={addFlashcard}
        >
          <div className="text-xl font-bold text-purple-500 hover:text-purple-600 cursor-pointer">
            + Add Card
          </div>
        </button>
      </div>

      {/* Arrow icon to toggle the navbar */}
      <button 
        className={`fixed top-1/2 left-0 z-50 bg-purple-500 text-white p-3 rounded-full shadow-lg transform -translate-y-1/2 ${isNavOpen ? 'ml-64' : ''}`}
        onClick={toggleNav}
      >
        {isNavOpen ? <ChevronLeftIcon className="h-6 w-6" /> : <ChevronRightIcon className="h-6 w-6" />}
      </button>

      {/* Collapsible Navbar */}
      <CollapsibleNavbar isNavOpen={isNavOpen} toggleNav={toggleNav}/>

      {isCreated? <CreatedBox/>:""}
    </div>
  );
}

export default FlashCardPage;
