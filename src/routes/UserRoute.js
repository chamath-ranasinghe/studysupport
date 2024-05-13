import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
  
  import Dashboard from "../Pages/Dashboard";
  import FlashCardPage from "../Pages/FlashCardPage";
  import { DataContextProvider } from "../Helpers/DataContext"; // This is to store the enrolled modules
  
  function UserRoute() {
    return (
      <DataContextProvider>  
      <Router>
              <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/flashcardpage" element={<FlashCardPage />} />
              </Routes>
      </Router>
      </DataContextProvider>
    );
  }
  
  export default UserRoute;
  