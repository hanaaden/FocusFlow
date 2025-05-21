import React from "react";
import "./Header.css";

export default function Header() {
  const userName = "Admin User";

  return (
    <header className="custom-header">
      <div className="header-left">
        <span className="user-name">{userName}</span>
      </div>
      <div className="header-right">
        <i className="fas fa-user-circle profile-icon"></i>
      </div>
    </header>
  );
}
