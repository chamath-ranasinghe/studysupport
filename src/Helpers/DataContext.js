// DataContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { json } from "react-router-dom";

const DataContext = createContext();

// Did this to make it simple to access course content
function filterIdAndFullName(data) {
  const mappedData = {};
  data.forEach((item) => {
    mappedData[item.fullname] = item.id;
  });
  return mappedData;
}

const DataContextProvider = ({ children }) => {
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
        console.error("Error fetching data:", error);
      }
    };

    // Check if current route is "/dashboard" before fetching data
    if (window.location.pathname === "/dashboard") {
      fetchData();
    }
  }, []);

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
