import React from 'react';
import Featurette from './Featurette'; // Assuming you have the Featurette component

const FeaturetteContainer = () => {
  return (
    <div className="flex flex-col items-center mx-10">
      <Featurette />
      <Featurette />
      <Featurette />
      <Featurette />
    </div>
  );
};

export default FeaturetteContainer;
