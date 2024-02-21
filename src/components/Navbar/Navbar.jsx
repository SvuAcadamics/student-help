// Navbar.js

import React, { useState } from 'react';
import './Navbar.css';  // Create a separate CSS file for styling
import { Link  } from "react-router-dom";
import { RoutePrefix,Route } from '../../roots';


<<<<<<< HEAD
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
        <Link className="link-for-data" to={`${RoutePrefix}/${Route.Home}`} onClick={handleLinkClick}>Home</Link>
        <Link className="link-for-data" to={`${RoutePrefix}/${Route.Syllabus}`} onClick={handleLinkClick}>Syllabus</Link>
        <Link className="link-for-data" to={`${RoutePrefix}/${Route.QuestionPaper}`}  onClick={handleLinkClick}>Question Paper</Link>
        <Link className="link-for-data" to={`${RoutePrefix}/${Route.Aboutus}`} onClick={handleLinkClick}>About us</Link>
      </div>

      <div className="toggle-button" onClick={handleToggle}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
=======
const NavBar = () => {
  return (
    <div>NavBar</div>
  )
}

export default NavBar
>>>>>>> 239c8a1a6b00f2c0329c9743f700b949fc1ff6ae
