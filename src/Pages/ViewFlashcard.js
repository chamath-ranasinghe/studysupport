import React, { useState,useEffect } from 'react';
import CollapsibleNavbar from '../Components/Flashcard/CollapsibleNavbar';
import axios from 'axios';

const ViewFlashcard = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(()=>{
    const fetchData = async ()=>{
        console.log("useEffect Working");
        const postData = {userid:2};
        const url = "http://localhost:5000/get-flashcards";

        try{
            const response = await axios.post(url,postData);
            console.log(response);
        } catch (err){
            console.error(err)
        }
    }

    fetchData();
  },[])

  return (
    <div className="relative">
      <div className={`transition-opacity duration-300 ${isNavOpen ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
            Hello
      </div>

      <CollapsibleNavbar isNavOpen={isNavOpen} toggleNav={toggleNav} />
    </div>
  );
};

export default ViewFlashcard;
