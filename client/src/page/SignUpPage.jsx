// import React from "react";
// import { Link } from "react-router-dom";
// import "./index.css";

// const SignUpPage = () => {
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
//         <input type="text" placeholder="Name" className="input-field" />
//         <input type="email" placeholder="Email" className="input-field" />
//         <input type="password" placeholder="Password" className="input-field" />
//         <button className="submit-btn">Sign Up</button>
//         <br></br>
//          <Link to="/signin" >Already have an account? Sign In</Link>
//       </div>
//     </div>
//   );
// };

// export default SignUpPage;
 




import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.css";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    setError("");
    if (!username || !email || !password) {
      setError("Please fill all fields");
      return;
    }
    try {

        const api = "http://localhost:5000" // Replace with your backend URL
      const res = await axios.post(
        `${api}/register`,
        { username, email, password }
      );

      if (res.data === "User registered successfully") {
        navigate("/signin");
      } else {
        setError(res.data || "Registration failed");
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
          type="text"
          placeholder="Name"
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <button className="submit-btn" onClick={handleSignUp}>
          Sign Up
        </button>
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        <br />
        <Link to="/signin">Already have an account? Sign In</Link>
      </div>
    </div>
  );
};

export default SignUpPage;
