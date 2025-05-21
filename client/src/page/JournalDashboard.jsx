// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const JournalDashboard = () => {
//   const [latestJournal, setLatestJournal] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const api = "http://localhost:5000"; // Change to your API base URL

//   useEffect(() => {
//     axios
//       .get(`${api}/journals`, { withCredentials: true })
//       .then((res) => {
//         const sorted = res.data.sort(
//           (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//         );
//         setLatestJournal(sorted[0] || null);
//       })
//       .catch((err) => {
//         console.error("Failed to fetch journals:", err);
//       });
//   }, []);

//   return (
//     <div>
//       <Link to="/journals" style={{ fontWeight: "bold", color: "#2D142E", textDecoration: "none" }}>
//         <div className="journal-card" style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px", maxWidth: "600px", margin: "20px auto", background: "#693B69", height:"300px" }}>
//           <div className="journal-header" style={{ marginBottom: "15px", fontSize: "16px", fontWeight: "bold", color: "#fff" , background:"#2D142E", padding:"10px", borderRadius:"5px", textAlign:"center"}}>
//             {latestJournal?.title || "No Journal Entries Yet"}
//           </div>

//           <div className="journal-content" style={{ minHeight: "150px", color: "#555", whiteSpace: "pre-wrap", fontSize: "1.1rem", lineHeight: "1.5" ,backgroundColor:"#2D142E", borderRadius:"5px"}}>
//             {latestJournal?.content || (
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   flexDirection: "column",
//                   color: "#888",
//                   fontStyle: "italic",
//                   height: "200px",
//                   overflowY:"auto",
//                   gap: "15px",
//                 }}
//               >
//                 <i className="fas fa-plus" style={{ fontSize: "48px" }}></i>
                
//               </div>
//             )}
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// // export default JournalDashboard;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import "./Dashboard.css"

// const JournalDashboard = () => {
//   const [latestJournal, setLatestJournal] = useState(null);
//   const api = "http://localhost:5000"; // Change to your API base URL

//   useEffect(() => {
//     axios
//       .get(`${api}/journals`, { withCredentials: true })
//       .then((res) => {
//         const sorted = res.data.sort(
//           (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//         );
//         setLatestJournal(sorted[0] || null);
//       })
//       .catch((err) => {
//         console.error("Failed to fetch journals:", err);
//       });
//   }, []);

//   return (
//     <div className="journal-card">
//       <Link to="/journals" className="journal-link">
       
//           <div className="journal-header">
//             {latestJournal?.title || "No Journal Entries Yet"}
//           </div>

//           <div className="journal-content">
//             {latestJournal?.content ? (
//               latestJournal.content
//             ) : (
//               <div className="journal-placeholder">
//                 <i className="fas fa-plus placeholder-icon"></i>
//               </div>
//             )}
//           </div>
       
//       </Link>
//     </div>
//   );
// };

// export default JournalDashboard;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const JournalDashboard = () => {
  const [latestJournal, setLatestJournal] = useState(null);
  const api = "http://localhost:5000"; // Replace with your backend URL

  useEffect(() => {
    axios
      .get(`${api}/journals`, { withCredentials: true })
      .then((res) => {
        const sorted = res.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setLatestJournal(sorted[0] || null);
      })
      .catch((err) => {
        console.error("Failed to fetch journals:", err);
      });
  }, []);

  return (
    <div className="journal-card">
      <div className="journal-header">
        {latestJournal?.title || "No Journal Entries Yet"}
      </div>

      <div className="journal-content">
        {latestJournal?.content ? (
          latestJournal.content
        ) : (
          <div className="journal-placeholder">
            <Link to="/journals">
              <i className="fas fa-plus placeholder-icon"></i>
            </Link>
            <p style={{ marginTop: "10px" }}>Add your first journal entry</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JournalDashboard;
