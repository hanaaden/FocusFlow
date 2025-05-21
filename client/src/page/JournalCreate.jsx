// src/page/JournalCreate.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./JournalCreate.css";

const JournalCreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would normally send this to the backend API
    const newJournal = { title, content };
    console.log("Journal Created:", newJournal);

    // Redirect to journal list or single entry page
    navigate("/journals");
  };

  return (
    <div className="main-container">
      <h1 className="page-title">Create New Journal Entry</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="save-btn">Save</button>
      </form>
    </div>
  );
};

export default JournalCreate;
