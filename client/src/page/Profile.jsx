// // // // src/page/Profile.jsx
// // // import React from "react";
// // // import "./Profile.css";

// // // const Profile = () => {
// // //   return (
// // //     <div className="main-container">
// // //       <h1 className="page-title">Your Profile</h1>
// // //       <div className="profile-info">
// // //         <p><strong>Name:</strong> Hana</p>
// // //         <p><strong>Email:</strong> hana@example.com</p>
// // //         <p><strong>Current Streak:</strong> 5 days</p>
// // //         <p><strong>Journal Count:</strong> 14</p>
// // //         <p><strong>To-Do Count:</strong> 30</p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Profile;


// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import "./Profile.css";

// // const Profile = () => {
// //   const [user, setUser] = useState({
// //     username: "",
// //     email: "",
// //   });
// //   const [password, setPassword] = useState("");
// //   const [loading, setLoading] = useState(true);
// //   const [message, setMessage] = useState(null);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchProfile = async () => {
// //       try {
// //         const token = localStorage.getItem("token");
// //         if (!token) throw new Error("No token found");
// //     const api = "http://localhost:5000";

// //         const res = await axios.get(`${api}/users`, {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //         });

// //         setUser({
// //           username: res.data.username || "",
// //           email: res.data.email || "",
// //         });
// //       } catch (err) {
// //         setError("Failed to load profile");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchProfile();
// //   }, []);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setMessage(null);
// //     setError(null);

// //     try {
// //       const token = localStorage.getItem("token");
// //       if (!token) throw new Error("No token found");

// //       // Prepare update data; only send password if user entered it
// //       const updateData = {
// //         username: user.username,
// //       };
// //       if (password.trim()) {
// //         updateData.password = password;
// //       }
// //  const api = "http://localhost:5000";
// //       await axios.put(`${api}/users`, updateData, {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       });

// //       setMessage("Profile updated successfully");
// //       setPassword("");
// //     } catch (err) {
// //       setError("Failed to update profile");
// //     }
// //   };

// //   if (loading) {
// //     return <div className="main-container">Loading profile...</div>;
// //   }

// //   return (
// //     <div className="main-container">
// //       <h1 className="page-title">Your Profile</h1>

// //       <div className="profile-card">
// //         {error && <div className="error-message">{error}</div>}
// //         {message && <div className="success-message">{message}</div>}

// //         <form onSubmit={handleSubmit} className="profile-form">
// //           <label>
// //             <strong>Username:</strong>
// //             <input
// //               type="text"
// //               value={user.username}
// //               onChange={(e) => setUser({ ...user, username: e.target.value })}
// //               required
// //             />
// //           </label>

// //           <label>
// //             <strong>Email:</strong>
// //             <input type="email" value={user.email} disabled />
// //           </label>

// //           <label>
// //             <strong>New Password:</strong>
// //             <input
// //               type="password"
// //               value={password}
// //               placeholder="Leave blank to keep current password"
// //               onChange={(e) => setPassword(e.target.value)}
// //             />
// //           </label>

// //           <button type="submit" className="submit-btn">
// //             Update Profile
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Profile.css";
// import Header from "./Header";
// import Sidebar from "./sidebar";

// const Profile = () => {
//   const [user, setUser] = useState({ username: "", email: "" });
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [message, setMessage] = useState(null);
//   const [error, setError] = useState(null);
//   const api ="http://localhost:5000";
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) throw new Error("No token found");
//         const res = await axios.get(`${api}/users/${user._id}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         setUser({
//           username: res.data.username || "",
//           email: res.data.email || "",
//         });
//       } catch (err) {
//         setError("Failed to load profile");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage(null);
//     setError(null);

//     try {
//       const token = localStorage.getItem("token");
//       if (!token) throw new Error("No token found");

//       const updateData = { username: user.username };
//       if (password.trim()) updateData.password = password;
 
//       await axios.put(`${api}/users`, updateData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       setMessage("Profile updated successfully.");
//       setPassword("");
//     } catch (err) {
//       setError("Failed to update profile.");
//     }
//   };


//   return (
//     <div className="layout">
//       <Sidebar />
//       <div className="main-container">
//         <Header />
//         <h2 className="page-title">Your Profile</h2>

//         <div className="profile-card">
//           {error && <div className="error-message">{error}</div>}
//           {message && <div className="success-message">{message}</div>}

//           <form onSubmit={handleSubmit} className="profile-form">
//             <label>
//               Username:
//               <input
//                 type="text"
//                 value={user.username}
//                 onChange={(e) => setUser({ ...user, username: e.target.value })}
//                 required
//               />
//             </label>

//             <label>
//               Email:
//               <input type="email" value={user.email} disabled />
//             </label>

//             <label>
//               New Password:
//               <input
//                 type="password"
//                 value={password}
//                 placeholder="Leave blank to keep current password"
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </label>

//             <button type="submit" className="update-btn">
//               Update Profile
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;






























import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";
import Header from "./Header";
import Sidebar from "./sidebar";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState([]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
 const navigate = useNavigate();


  const api = "http://localhost:5000";

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No token found");
        const res = await axios.get(`${api}/me`, {
         withCredentials:true
        });

        setUser({
          username: res.data.username,
          email: res.data.email ,
        });
      } catch (err) {
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);

    // Validate passwords match if password is entered
    if (password && password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found");

      const updateData = { username: user.username };
      if (password.trim()) updateData.password = password;

      await axios.put(`${api}/me`, updateData, {
      withCredentials:true
      });

      setMessage("Profile updated successfully.");
      setPassword("");
      setConfirmPassword("");
        navigate("/dashboard");
    } catch (err) {
      setError("Failed to update profile.");
    }
  };

  if (loading) {
    return <div className="main-container">Loading profile...</div>;
  }

  return (
    <div className="layout">
      <Sidebar />
      <div className="main-container">
        <Header />
        <div>
          <h2 className="title">Your Profile</h2>

        <div className="profile-card">
          {error && <div className="error-message">{error}</div>}
          {message && <div className="success-message">{message}</div>}

          <form onSubmit={handleSubmit} className="profile-form">
            <label>
              Username:
              <input
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                required
              />
            </label>

            <label>
              Email:
              <input type="email" value={user.email} disabled />
            </label>

            <label>
              New Password:
              <input
                type="password"
                value={password}
                placeholder="Leave blank to keep current password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            <label>
              Confirm Password:
              <input
                type="password"
                value={confirmPassword}
                placeholder="Confirm new password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>

            <button type="submit" className="update-btn">
              Update Profile
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
