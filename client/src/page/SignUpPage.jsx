import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const SignUpPage = () => {
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
        <input type="text" placeholder="Name" className="input-field" />
        <input type="email" placeholder="Email" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button className="submit-btn">Sign Up</button>
        <br></br>
         <Link to="/signin" >Already have an account? Sign In</Link>
      </div>
    </div>
  );
};

export default SignUpPage;
 