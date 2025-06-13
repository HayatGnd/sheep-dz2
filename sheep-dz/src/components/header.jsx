import React from "react";
import "./header.css";

const Header = () => (
  <header className="header">
    <div className="header-left">
      <img
        src="/logo.png" 
        alt="Sheepfy Logo"
        className="header-logo"
      />
      <span className="header-title">Sheepfy</span>
      <span className="header-page">Home</span>
    </div>
    <div className="header-avatar" />
  </header>
);

export default Header;