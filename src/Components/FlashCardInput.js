import axios from "axios";
import React, { useState } from "react";
import FileSelectorOverlay from "./Flashcard/FileSelectorOverlay";

const FlashCardInput = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [courseId, setSelectedCourseId] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [specialTags, setSpecialTags] = useState(null);

  // Handling file selection for AI Generate
  const [courseDocs, setCourseDocs] = useState([]);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(''); // This is URL

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  const items = props.items;

  const handleManualCreate = async () => {
    const userid = localStorage.getItem("userid");

    const flashcardContent = {
      userid: userid,
      title: title,
      description: description,
      modulename: selectedItem,
      specialTags: specialTags,
      flashcards: props.flashcards
    };

    const url = "http://localhost:5000/insert-flashcards";

    try {
      const response = await axios.post(url, flashcardContent);
      console.log(response.data.success);
      if (response.data.success) {
        props.isCreated(true);
      } else {
        props.isCreated(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectFile = async ()=>{

    // Fetch the docs available in Moodle
    const courseInfo = {
      courseid: courseId,
    };

    const url = "http://localhost:5000/get-docs";

    try {
      const response = await axios.post(url, courseInfo);
      setCourseDocs(response.data);
      toggleOverlay();
    } catch (error) {
      console.error(error);
    }
  }

  const handleAICreate = async () => {
    const userid = localStorage.getItem("userid");

    const flashcardInfo = {
      userid: userid,
      title: title,
      description: description,
      modulename: selectedItem,
      specialTags: specialTags,
      fileurl: selectedFile
    };

    const url = "http://localhost:5000/insert-flashcards-ai";

    try {
      const response = await axios.post(url, flashcardInfo);
      console.log(response);
    } catch (error) {
      console.error(error);
    }


  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleTags = (e) => {
    setSpecialTags(e.target.value);
  };

  const handleSelect = (key) => {
    setSelectedItem(key.fullname);
    setSelectedCourseId(key.id);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div className="bg-white-100 shadow-lg mt-16 mx-10 rounded-lg p-4 relative">
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Enter a Title to the card set"
          className="bg-gray-300 shadow-md rounded-lg p-3 m-3"
          onChange={handleTitle}
        />
        <div className="grid grid-rows-2 grid-flow-col">
          <textarea
            placeholder="Add a description"
            className="col-span-5 row-span-2 bg-gray-300 shadow-md rounded-lg p-5 m-3"
            onChange={handleDescription}
          />
          <div
            className="col-span-2 bg-gray-300 shadow-md rounded-lg p-3 mb-5 m-3 cursor-pointer relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedItem ? <div>{selectedItem}</div> : <div>Module Name</div>}
            {isOpen && (
              <div className="absolute top-full left-0 z-10 w-full bg-white shadow-lg rounded-lg mt-1">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                    onClick={() => handleSelect(item)}
                  >
                    {item.fullname}
                  </div>
                ))}
              </div>
            )}
          </div>
          <input
            type="text"
            placeholder="Special Tags"
            className="col-span-2 bg-gray-300 shadow-md rounded-lg p-3 mb-4 m-3"
            onChange={handleTags}
          />
        </div>
      </div>
      <div className="grid grid-rows-1 grid-flow-col place-content-between">
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 m-3 rounded-lg"
          onClick={handleSelectFile}
        >
          Ask AI to Create
        </button>
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 m-3 rounded-lg"
          onClick={handleManualCreate}
        >
          Create
        </button>
      </div>

      {isOverlayOpen && (
        <FileSelectorOverlay files={courseDocs} onClose={toggleOverlay} setSelectedFile={setSelectedFile} handleAICreate={handleAICreate} />
      )}
    </div>
  );
};

export default FlashCardInput;
