import React from "react";
import FlashCardTile from "./FlashCardTile";

const FlashCardTileContainer = () => {
    return (
        <div className="flex justify-center items-center bg-white shadow-lg  my-10 mx-10 rounded-lg p-4 h-28"> 
        <div className="text-xl font-bold text-purple-500 hover:text-purple-600">+ Add Card</div>
     </div>
    );
};

export default FlashCardTileContainer;