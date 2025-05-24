// // src/page/JournalCreate.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./JournalCreate.css";

// const JournalCreate = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Here you would normally send this to the backend API
//     const newJournal = { title, content };
//     console.log("Journal Created:", newJournal);

//     // Redirect to journal list or single entry page
//     navigate("/journals");
//   };

//   return (
//     <div className="main-container">
//       <h1 className="page-title">Create New Journal Entry</h1>
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
//         <button type="submit" className="save-btn">Save</button>
//       </form>
//     </div>
//   );
// };

// export default JournalCreate;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Sidebar from "./sidebar";
import "./JournalCreate.css";

const JournalCreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const api = "https://focusflow-red6.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!title.trim() || !content.trim()) {
      setError("Both title and content are required.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `${api}/journals`,
        { title, content },
        { withCredentials: true }
      );
      console.log("Journal Created:", response.data);
      navigate("/journals"); // Redirect to journal list page after creation
    } catch (err) {
      console.error("Failed to create journal entry:", err);
      setError("Failed to create journal entry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="main-container">
        <Header />
        <div className="main">
          <h1 className="page-title">Create New Journal Entry</h1>
          <form className="journal-create-form" onSubmit={handleSubmit}  >
            <div className="form-group">
              <label htmlFor="title" className="form-label" style={{color:"#2d142e"}}>
                Title
              </label>
              <input
                id="title"
                className="form-input"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter journal title"
                required
                style={{border:"2px solid #2d142e"}}
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="content" className="form-label" style={{color:"#2d142e"}}>
                Content
              </label>
              <textarea
                id="content"
                className="form-input"
                rows={8}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your journal content here..."
                required
                style={{border:"2px solid #2d142e"}}
                disabled={loading}
              ></textarea>
            </div>

            {error && <p className="form-error">{error}</p>}

            <button
              type="submit"
              className="save-btn"
              disabled={loading}
              style={{padding:"10px", marginTop:"10px"}}
            >
              {loading ? "Saving..." : "Save Journal"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JournalCreate;
