import React from 'react';
import Featurette from './Featurette'; // Assuming you have the Featurette component

const FeaturetteContainer = () => {
  return (
    <div className="flex flex-col items-center mx-10">
      <Featurette title={"Chatbot"} />
      <Featurette title={"Past Paper"}/>
      <Featurette title={"Flashcards"}/>
      <Featurette title={"External Resources"}/>
    </div>
  );
};


export default FeaturetteContainer;
