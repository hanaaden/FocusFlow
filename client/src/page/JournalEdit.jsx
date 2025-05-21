// // src/page/JournalEdit.jsx
// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import "./JournalEdit.css";

// const JournalEdit = () => {
//   const { id } = useParams(); // Get the ID of the journal to edit
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Here, you would fetch the journal entry by ID from your backend
//     // Just an example using hardcoded data
//     const fetchedJournal = { title: "Apr 21 - Gratefulness", content: "I feel thankful for..." };
//     setTitle(fetchedJournal.title);
//     setContent(fetchedJournal.content);
//   }, [id]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Here you would update the journal on the backend
//     const updatedJournal = { title, content };
//     console.log("Journal Updated:", updatedJournal);

//     // Redirect back to the journal list
//     navigate("/journals");
//   };

//   return (
//     <div className="main-container">
//       <h1 className="page-title">Edit Journal Entry</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Content</label>
//           <textarea
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <button type="submit" className="save-btn">Save Changes</button>
//       </form>
//     </div>
//   );
// };

// export default JournalEdit;




import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./JournalEdit.css";
import Sidebar from "./sidebar";
import Header from "./Header";

const JournalEdit = () => {
  const { id } = useParams(); // journal ID
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const api = "http://localhost:5000"; // backend URL

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${api}/journals/${id}`, { withCredentials: true })
      .then((res) => {
        setTitle(res.data.title || "");
        setContent(res.data.content || "");
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load journal entry.");
        setLoading(false);
        console.error(err);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!title.trim() || !content.trim()) {
      setError("Title and content cannot be empty.");
      return;
    }

    const updatedJournal = { title: title.trim(), content: content.trim() };

    axios
      .put(`${api}/journals/${id}`, updatedJournal, { withCredentials: true })
      .then(() => {
        navigate("/journals");
      })
      .catch(() => {
        setError("Failed to update the journal. Please try again.");
      });
  };

  const handleDelete = () => {
    
      axios
        .delete(`${api}/journals/${id}`, { withCredentials: true })
        .then(() => {
          navigate("/journals");
        })
        .catch(() => {
          setError("Failed to delete the journal. Please try again.");
        });
    
  };

  if (loading) {
    return (
      <div className="journal-edit-container">
        <p className="loading-text">Loading journal entry...</p>
      </div>
    );
  }

  return (
  <div className="layout">
    <Sidebar />
    <div className="main-container">
      <Header />
        <main className="journal-edit-container">
      <h1 className="page-titl">Edit Journal Entry</h1>
      {error && <p className="error-msg">{error}</p>}

      <form onSubmit={handleSubmit} className="journal-edit-form" noValidate>
        <label htmlFor="title" className="input-label">
          Title
        </label>
        <input
          id="title"
          type="text"
          className="text-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Entry title"
          maxLength={100}
          required
        />

        <label htmlFor="content" className="input-label">
          Content
        </label>
        <textarea
          id="content"
          className="textarea-input"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your journal entry here..."
          rows={10}
          maxLength={5000}
          required
        />

        <button
          type="submit"
          className="save-bt"
          aria-label="Save journal changes"
        >
          Save Changes
        </button>
      </form>

       <button className="delete-btn" onClick={handleDelete} style={{marginTop:"20px"}}>
              Delete 
            </button>
    </main>
    </div>
  </div>
  );
};

export default JournalEdit;
