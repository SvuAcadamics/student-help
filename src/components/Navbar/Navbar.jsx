// Navbar.js

import React, { useState } from 'react';
import './Navbar.css';  // Create a separate CSS file for styling
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };
  
  const handleLinkClick = () => {
    setIsMobile(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="navbar">
      <div className="logo">SVUA</div>

      <div className={`menu ${isMobile ? 'active' : ''}`}>
        <Link className="link-for-data" to="/home" onClick={handleLinkClick}>Home</Link>
        <Link className="link-for-data" to="/syllabus" onClick={handleLinkClick}>Syllabus</Link>
        <Link className="link-for-data" to="/questionpaper" onClick={handleLinkClick}>Question Paper</Link>
        <Link className="link-for-data" to="/aboutUs" onClick={handleLinkClick}>About us</Link>
      </div>

      <div className="toggle-button" onClick={handleToggle}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
