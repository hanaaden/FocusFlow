// src/page/Dashboard.jsx
import React from "react";
import "./Dashboard.css";
import Header from "./Header";
import Sidebar from "./sidebar";

const Dashboard = () => {
  return (
    <>
     <div className="layout">
      <Sidebar /> 
     
      <div className="main-container">
        <Header />
        <h1 className="page-title">Welcome Back!</h1>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
