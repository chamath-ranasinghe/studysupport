import React from "react";
import { useContext } from "react";
import { DataContext } from "../Helpers/DataContext";

const Dashboard = () => {
  const { data } = useContext(DataContext);
  //const fullname = data[0].fullName;
  return <div>Loaded</div>;
};

export default Dashboard;
