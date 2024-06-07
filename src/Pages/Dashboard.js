import React from "react";
import { useContext } from "react";
import NavBarSignedIn from "../Components/NavBarSignedIn";
import { DataContext } from "../routes/UserRoute";

const Dashboard = () => {
  return (
    <>
      <NavBarSignedIn />
      <div class="bg-purple-600 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-11/12 h-5/6 p-6">
        <div className="flex justify-between items-start">
          <div className="flex flex-col items-center">
            <div className="bg-red-600 rounded-full w-24 h-24 flex items-center justify-center text-white text-2xl mb-6">
              {/* Placeholder for profile image */}
              <span className="text-white">DP</span>
            </div>
            <h2 className="text-2xl font-semibold text-center">Student Name</h2>
            <button className="bg-indigo-500 text-white px-4 py-2 my-2 rounded">
              Edit Profile
            </button>
            <div className="mt-4 space-y-2">
              <div className="bg-gray-200 rounded px-4 py-2">
                <strong>Email:</strong> student@uom.lk
              </div>
              <div className="bg-gray-200 rounded px-4 py-2">
                <strong>Degree Program:</strong> AI
              </div>
              <div className="bg-gray-200 rounded px-4 py-2">
                <strong>Year:</strong> 2nd Year
              </div>
            </div>
          </div>
          <div className="flex-1 ml-6">
            <h2 className="text-2xl font-semibold">Recent</h2>
            <div className="mt-4 border-t border-gray-300 pt-4">
              {/* Placeholder for recent activities */}
              <p className="text-gray-500">No recent activities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>

  );
};

export default Dashboard;


/*
const Dashboard = () => {
  //const fullname = data[0].fullName;
 // return <div> Loaded </div>;
/*
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
            <h1>This is an example</h1>
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
*/
