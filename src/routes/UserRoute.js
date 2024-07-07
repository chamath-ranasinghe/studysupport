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
  import Summary from "../Pages/Summary";

  export const DataContext = createContext();

  function filterIdAndFullName(data) {
    return data.map(item => ({ id: item.id, fullname: item.fullname }));
  }
  
  function UserRoute() {

    const [data, setData] = useState(null);
    const userid = localStorage.getItem('userid');

    useEffect(() => {
      // Fetch data from the database when "/dashboard" route is accessed
      const fetchData = async () => {

        const url = 'http://localhost:5000/get-courses';
        try{
          const response = await axios.post(url,{userid:userid});
          const jsonData = response.data;
          const filteredData = filterIdAndFullName(jsonData);
          setData(filteredData);
        } catch (err){
          console.error(err)
        }
      };

      // Check if current route is "/flashcardpage" before fetching data
      if (window.location.pathname === '/flashcardpage' | window.location.pathname === '/summary' ) {
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
                  <Route path="/summary" element={<Summary />} />

              </Routes>
      </Router>
      {/* </DataContextProvider> */}
      </DataContext.Provider> 
      </>
    );
  }
  
  export default UserRoute;
  