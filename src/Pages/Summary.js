import React, { useState, useContext, useEffect } from 'react';
import Navbar from "../Components/NavBar";
import { DataContext } from "../routes/UserRoute";
import axios from "axios";

const Summary = () => {
  const data = useContext(DataContext);

  const [courseId, setSelectedCourseId] = useState(null);
  const [isModuleOpen, setIsModuleOpen] = useState(false);
  const [isSlideOpen, setIsSlideOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedDoc, setSelectedDoc] = useState(''); // This is URL
  const [selectedDocName, setSelectedDocName] = useState('');
  const [courseDocs, setCourseDocs] = useState([]);

  const handleModuleSelect = (item) => {
    setSelectedModule(item.fullname);
    setSelectedCourseId(item.id);
    setIsModuleOpen(false);
  };

  const handleFileSelect = (item) => {
    setSelectedDocName(item.filename);
    setSelectedDoc(item.fileurl);
    setIsModuleOpen(false);
  };

  const handleSummary = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/handle-summary";
    const postData = {fileurl: selectedDoc}

    try {
      const response = await axios.post(url, postData);
      console.log(response);
    } catch (error) {
      console.error(error);
    }

  }


  useEffect(() => {
    if (selectedModule) {
      // Fetch the docs available in Moodle
      const fetchDocs = async () => {
        const courseInfo = {
          courseid: courseId, // assuming selectedModule contains id
        };

        const url = "http://localhost:5000/get-docs";

        try {
          const response = await axios.post(url, courseInfo);
          setCourseDocs(response.data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchDocs();
    }
  }, [selectedModule]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Select Module and Lecture Slides</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="module">
              Module Name
            </label>
            <div
              className="col-span-2 bg-gray-300 shadow-md rounded-lg p-3 mb-5 m-3 cursor-pointer relative"
              onClick={() => setIsModuleOpen(!isModuleOpen)}
            >
              {selectedModule ? <div>{selectedModule}</div> : <div>Select a module</div>}
              {isModuleOpen && (
                <div className="absolute top-full left-0 z-10 w-full bg-white shadow-lg rounded-lg mt-1">
                  {data.map((item, index) => (
                    <div
                      key={index}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                      onClick={() => handleModuleSelect(item)}
                    >
                      {item.fullname}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="slides">
              Lecture Slides
            </label>
            <div
              className="col-span-2 bg-gray-300 shadow-md rounded-lg p-3 mb-5 m-3 cursor-pointer relative"
              onClick={() => setIsSlideOpen(!isSlideOpen)}
            >
              {selectedDoc ? <div>{selectedDocName}</div> : <div>Select lecture slides</div>}
              {isSlideOpen && (
                <div className="absolute top-full left-0 z-10 w-full bg-white shadow-lg rounded-lg mt-1">
                  {courseDocs.map((item, index) => (
                    <div
                      key={index}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                      onClick={() => handleFileSelect(item)}
                    >
                      {item.filename}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleSummary}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Summary;
