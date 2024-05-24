import { useContext, useState } from "react";
import FlashCardInput from "../Components/FlashCardInput";
import FlashCardTile from "../Components/FlashCardTile";
import Navbar from "../Components/NavBar";
import { DataContext } from "../routes/UserRoute";

function FlashCardPage() {
  const data = useContext(DataContext);
  const [flashcards, setFlashcards] = useState([]);
  const [term, setTerm] = useState(null);
  const [definition , setDefinition] = useState(null);

  const addFlashcard = ()=>{
    setFlashcards(flashcards => [...flashcards, {term: term, definition: definition}]);
    setTerm(null);
    setDefinition(null);

  }

  const handleTerm = (e)=>{
    setTerm(e.target.value);
  }

  const handleDefinition = (e)=>{
    setDefinition(e.target.value);
  }

  const handleRemoveCard = (index) => {
    setFlashcards(prevCards => prevCards.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Navbar />
      <FlashCardInput items={data} />

      {flashcards.map((card,index)=>(
        <FlashCardTile key={index} removeCard = {()=> handleRemoveCard(index)} sendTermToParent = {handleTerm} sendDefinitionToParent = {handleDefinition} term = {card.term} definition = {card.definition} number={index+1} />
      ))}  

      <button className="flex justify-center items-center bg-white shadow-lg my-10 mx-10 rounded-lg p-4 h-28" style={{width: "94vw"}} onClick={addFlashcard}>
        <div className="text-xl font-bold text-purple-500 hover:text-purple-600 cursor-pointer">
          + Add Card
        </div>
      </button>
    </div>
  );
}

export default FlashCardPage;
