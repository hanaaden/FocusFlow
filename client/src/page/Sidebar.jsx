import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import axios from "axios";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
const navigate = useNavigate();
    const handleLogout = async () => {
    try {
      await axios.get("http://localhost:5000/logout", {
        withCredentials: true, // send cookie
      });
      localStorage.removeItem("token");
      
      navigate("/signin");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };
  return (
    <>
      <button className="sidebar-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <i className={`fas ${isSidebarOpen ? "" : "fa-bars"}`}></i>
      </button>

      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
          <button className="close-btn" onClick={() => setIsSidebarOpen(false)}> <i className="fas fa-times" ></i></button>
        </div>
        <nav className="sidebar-nav">
          <Link to="/dashboard" className="sidebar-link" onClick={() => setIsSidebarOpen(false)}>
            <i className="fas fa-folder"></i> Dashboard
          </Link>
          <Link to="/todo" className="sidebar-link" onClick={() => setIsSidebarOpen(false)}>
            <i className="fas fa-tasks"></i> To Do Lists
          </Link>
          <Link to="/journals" className="sidebar-link" onClick={() => setIsSidebarOpen(false)}>
            <i className="fas fa-edit"></i> Journals
          </Link>
          <Link  className="sidebar-link" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i> Logout
          </Link>
        </nav>
      </aside>

      {isSidebarOpen && <div className="overlay" onClick={() => setIsSidebarOpen(false)}></div>}
    </>
  );
}
