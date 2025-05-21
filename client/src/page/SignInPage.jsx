// // src/page/SignInPage.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import "./index.css";
// import {useNavigate } from "react-router-dom";

// const SignInPage = () => {
//   const navigate = useNavigate();

//   const handleSignIn = () => {
//     // Here you would normally handle authentication
//     // For demonstration, we'll navigate to the dashboard directly
//     navigate("/dashboard");
//   };
//   return (
//     <div className="main-container">
//       <div className="nav">
//         <div className="container">
//           <div className="icon-logo">
//             <div className="frame" />
//           </div>
//           <div className="btn">
//             <div className="signup">
//               <Link to="/signup" className="signup-btn">
//                 Sign Up
//               </Link>
//             </div>
//             <div className="signin">
//               <Link to="/signin" className="signup-btn-1">
//                 Sign In
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="form-container">
//         <input type="email" placeholder="Email" className="input-field" />
//         <input type="password" placeholder="Password" className="input-field" />
//         <button className="submit-btn" onClick={handleSignIn}>Sign In</button>
//         <br></br>
//          <Link to="/signup">Don't have an account? Sign Up</Link>
//       </div>
//     </div>
//   );
// };

// export default SignInPage;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.css";

const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async () => {
    setError("");
    try {

         const api = "http://localhost:5000" // Replace with your backend URL
      const res = await axios.post(
        `${api}/login`,
        { email, password },
        { withCredentials: true } 
      );

      if (res.data === "success") {
        navigate("/dashboard");
      } else {
        setError(res.data || "Login failed");
      }
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data);
      } else {
        setError("Network error, please try again later");
      }
    }
  };

  return (
    <div className="main-container">
      <div className="nav">
        <div className="container">
          <div className="icon-logo">
            <div className="frame" />
          </div>
          <div className="btn">
            <div className="signup">
              <Link to="/signup" className="signup-btn">
                Sign Up
              </Link>
            </div>
            <div className="signin">
              <Link to="/signin" className="signup-btn-1">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="form-container">
        <input
          type="email"
          placeholder="Email"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="submit-btn" onClick={handleSignIn}>
          Sign In
        </button>
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        <br />
        <Link to="/signup">Don't have an account? Sign Up</Link>
      </div>
    </div>
  );
};

export default SignInPage;
