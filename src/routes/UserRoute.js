import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

  import axios from 'axios';

  import { createContext,useState,useEffect } from "react";  
  
  import Dashboard from "../Pages/Dashboard";
  import FlashCardPage from "../Pages/FlashCardPage";
  import ViewFlashcard from "../Pages/ViewFlashcard";

  export const DataContext = createContext();

  function filterIdAndFullName(data) {
    return data.map(item => ({ id: item.id, fullname: item.fullname }));
  }
  
  function UserRoute() {

    const [data, setData] = useState(null);

    useEffect(() => {
      // Fetch data from the database when "/dashboard" route is accessed
      const fetchData = async () => {
        try {
          // Make a GET request to Moodle API to fetch enrolled modules for the specified user
      const response = await axios.get(
          `http://localhost/moodle/webservice/rest/server.php`,
          {
            params: {
              wstoken: process.env.REACT_APP_MOODLE_ACCESS_TOKEN,
              wsfunction: "core_enrol_get_users_courses",
              moodlewsrestformat: "json",
              userid: 2,
            },
          }
        );
          const jsonData = await response.data;
          const filteredData = filterIdAndFullName(jsonData);
          setData(filteredData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      // Check if current route is "/dashboard" before fetching data
      if (window.location.pathname === '/flashcardpage') {
        fetchData();
      }
    }, []);

    return (
      <>
      <DataContext.Provider value={data}>
      {/*<DataContextProvider>*/}  
      <Router>
              <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/flashcardpage" element={<FlashCardPage />} />
                  <Route path="/viewflashcard" element={<ViewFlashcard />} />
              </Routes>
      </Router>
      {/* </DataContextProvider> */}
      </DataContext.Provider> 
      </>
    );
  }
  
  export default UserRoute;
  