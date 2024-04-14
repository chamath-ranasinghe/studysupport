import React from 'react';
import Featurette from './Featurette'; // Assuming you have the Featurette component

import ChatbotImg from "../Assets/Images/chatbot.png";
import PastPaperImg from "../Assets/Images/copy.png";
import FlashcardImg from "../Assets/Images/flash-card.png";
import ExternalImg from "../Assets/Images/youtube.png";

const FeaturetteContainer = () => {
  return (
    <div className="flex flex-col items-center mx-10">
      <Featurette title={"Chatbot"} image={ChatbotImg}/>
      <Featurette title={"Past Paper"} image={PastPaperImg}/>
      <Featurette title={"Flashcards"} image={FlashcardImg}/>
      <Featurette title={"External Resources"} image={ExternalImg}/>
    </div>
  );
};


export default FeaturetteContainer;
