// src/page/JournalList.jsx
import React from "react";
import "./JournalList.css";
import { Link } from "react-router-dom";

const JournalList = () => {
  return (
    <div className="main-container">
      <h1 className="page-title">Your Journal Entries</h1>
      <ul className="list-section">
        <li><Link to="/journal/1">Apr 20 - Reflections</Link></li>
        <li><Link to="/journal/2">Apr 21 - Gratefulness</Link></li>
      </ul>
    </div>
  );
};

export default JournalList;
