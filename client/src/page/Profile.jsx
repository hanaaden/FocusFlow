// src/page/Profile.jsx
import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="main-container">
      <h1 className="page-title">Your Profile</h1>
      <div className="profile-info">
        <p><strong>Name:</strong> Hana</p>
        <p><strong>Email:</strong> hana@example.com</p>
        <p><strong>Current Streak:</strong> 5 days</p>
        <p><strong>Journal Count:</strong> 14</p>
        <p><strong>To-Do Count:</strong> 30</p>
      </div>
    </div>
  );
};

export default Profile;
