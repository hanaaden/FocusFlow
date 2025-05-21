// src/page/SignInPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import {useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Here you would normally handle authentication
    // For demonstration, we'll navigate to the dashboard directly
    navigate("/dashboard");
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
        <input type="email" placeholder="Email" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button className="submit-btn" onClick={handleSignIn}>Sign In</button>
        <br></br>
         <Link to="/signup">Don't have an account? Sign Up</Link>
      </div>
    </div>
  );
};

export default SignInPage;
