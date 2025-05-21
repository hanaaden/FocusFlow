import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

import "./Header.css";
export default function Header() {
   const [userName, setUserName] = useState("");

  useEffect(() => {
    const getTokenFromCookie = () => {
      const cookies = document.cookie.split("; ");
      const tokenCookie = cookies.find(cookie => cookie.startsWith("token="));
      return tokenCookie?.split("=")[1];
    };

    const token = getTokenFromCookie();

    if (token) {
      try {
        const decoded = jwtDecode(token);
        const name = decoded.username || decoded.name || "User";
        setUserName(name);
      } catch (err) {
        console.error("Invalid token:", err);
        setUserName("User");
      }
    } else {
      setUserName("Guest");
    }
  }, []);

  return (
    <header className="custom-header">
      <div className="header-left">
        <span className="user-name">    {userName ? `Welcome, ${userName}` : "Loading..."}</span>
      </div>
      <div className="header-right">
        <i className="fas fa-user-circle profile-icon"></i>
      </div>
    </header>
  );
}
