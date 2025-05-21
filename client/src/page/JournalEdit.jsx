// src/page/JournalEdit.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./JournalEdit.css";

const JournalEdit = () => {
  const { id } = useParams(); // Get the ID of the journal to edit
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Here, you would fetch the journal entry by ID from your backend
    // Just an example using hardcoded data
    const fetchedJournal = { title: "Apr 21 - Gratefulness", content: "I feel thankful for..." };
    setTitle(fetchedJournal.title);
    setContent(fetchedJournal.content);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would update the journal on the backend
    const updatedJournal = { title, content };
    console.log("Journal Updated:", updatedJournal);

    // Redirect back to the journal list
    navigate("/journals");
  };

  return (
    <div className="main-container">
      <h1 className="page-title">Edit Journal Entry</h1>
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
        <button type="submit" className="save-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default JournalEdit;

