// src/page/ToDoList.jsx
import React from "react";
import "./ToDoList.css";

const ToDoList = () => {
  return (
    <div className="main-container">
      <h1 className="page-title">Tasks for May 20</h1>
      <ul>
        <li><input type="checkbox" /> Finish dashboard</li>
        <li><input type="checkbox" /> Start journaling UI</li>
      </ul>
      <div className="action-buttons">
        <button className="edit-btn">Edit</button>
        <button className="delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default ToDoList;
