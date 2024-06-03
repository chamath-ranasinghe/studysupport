import React from "react";
import { useContext } from "react";
import Navbar from "../Components/NavBar";
import { DataContext } from "../routes/UserRoute";


const Dashboard = () => {
  //const fullname = data[0].fullName;
 // return <div> Loaded </div>;

 return(
  <div class="bg-purple-600 min-h-screen flex items-center justify-center">
  <div class="w-screen h-60vw bg-white m-8 p-8 flex justify-between rounded-md shadow-md">
      <div class="w-2/5 h-full p-6 mr-4 bg-gray-100 rounded-md shadow-md">
      <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src=" " alt="" width="384" height="512"></img>
      <div class="flex justify-center p-2 text-sky-500 dark:text-sky-400">
        Student Name
      </div>
      <div className="flex justify-center">
         <button type="submit"
            className="group relative flex justify-center items-center w-36 py-2 px-4 mb-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-auto">
              Edit Profile
          </button>
      </div>
          <div class="flex flex-col justify-between">
          <div class="w-full h-1/2 p-6 bg-gray-100 rounded-md shadow-md mb-4">
            <h1>helloo</h1>
          </div>
          <div class="w-full h-1/2 p-6 bg-gray-100 rounded-md shadow-md mb-4">
            <h1>Helloo</h1>
          </div>
          <div class="w-full p-6 bg-gray-100 rounded-md shadow-md">
            <h1>Helloo</h1>
          </div>
      
      </div>
        
      </div>
      <div class="flex flex-col justify-between w-3/5">
          <div class="w-full h-1/2 p-6 bg-gray-100 rounded-md shadow-md mb-4">
            <h1>helloo</h1>
          </div>
          <div class="w-full h-1/2 p-6 bg-gray-100 rounded-md shadow-md">
            <h1>Helloo</h1>
          </div>
      </div>
  </div>
</div>

 );
};

export default Dashboard;
