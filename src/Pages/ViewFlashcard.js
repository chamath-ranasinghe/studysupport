import React, { useState, useEffect } from "react";
import CollapsibleNavbar from "../Components/Flashcard/CollapsibleNavbar";
import Tile from "../Components/Flashcard/Tile";
import axios from "axios";
import FlashcardViewer from "../Components/Flashcard/FlashcardViewer";

const ViewFlashcard = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [flashcardInfo, setFlashcardInfo] = useState([]);
  const [selectedFlashcard, setSelectedFlashcard] = useState(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleOpen = (flashcard) => {
    setSelectedFlashcard(flashcard);
  };

  const handleClose = () => {
    setSelectedFlashcard(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("useEffect Working");
      const postData = {userid: localStorage.getItem('userid')};
      const url = "http://localhost:5000/get-flashcards";

      try {
        const response = await axios.post(url, postData);
        console.log(response.data)
        setFlashcardInfo(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative">
      <div
        className={`transition-opacity duration-300 ${
          isNavOpen ? "opacity-50 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {flashcardInfo.map((flashcard, index) => (
            <Tile
              key={index}
              title={flashcard.title}
              description={flashcard.description}
              moduleName={flashcard.modulename}
              onOpen={() => handleOpen(flashcard)}
            />
          ))}
        </div>
      </div>

      <CollapsibleNavbar isNavOpen={isNavOpen} toggleNav={toggleNav} />

      
      {selectedFlashcard && (
        <FlashcardViewer flashcard={selectedFlashcard} onClose={handleClose} />
      )}
    </div>
  );
};

export default ViewFlashcard;
