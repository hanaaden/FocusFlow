// src/page/Dashboard.jsx
import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="main-container">
      <h1 className="page-title">Welcome Back!</h1>

      <section className="dashboard-section">
        <div className="card">
          <h2>Today’s To-Do List</h2>
          <ul>
            <li><input type="checkbox" /> Task 1</li>
            <li><input type="checkbox" /> Task 2</li>
          </ul>
        </div>

        <div className="card">
          <h2>Today’s Journal</h2>
          <p>Summary of today's journal entry...</p>
        </div>

        <div className="card">
          <h2>Streak Tracker</h2>
          <p>🔥 5-day streak!</p>
        </div>

        <div className="card">
          <h2>Progress Graph</h2>
          <div className="progress-placeholder">[Graph Placeholder]</div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
