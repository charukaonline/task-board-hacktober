import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <h1>SkillHive</h1>
        </div>

        {/* Navigation Links */}
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login" className="login-btn">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
