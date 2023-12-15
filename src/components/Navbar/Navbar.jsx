// Navbar.js

import React, { useState } from 'react';
import './Navbar.css';  // Create a separate CSS file for styling
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="logo">Your Logo</div>

      <div className={`menu ${isMobile ? 'active' : ''}`}>
        <Link className="link-for-data" to="/home">Home</Link>
        <Link className="link-for-data" to="/syllabus">Syllabus</Link>
        <Link className="link-for-data" to="/questionpaper">Question Paper</Link>
        <Link className="link-for-data" to="/AboutUs">About us</Link>
        

      </div>

      <div className="toggle-button" onClick={handleToggle}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
