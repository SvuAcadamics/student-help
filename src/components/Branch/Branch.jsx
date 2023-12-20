import React from 'react'
import './Branch.css'
import cse from "../../Images/branch images/cse.png";
import ece from "../../Images/branch images/ece.jpg";
import eee from "../../Images/branch images/eee.png";
import mech from "../../Images/branch images/mech.jpg";
import ce from "../../Images/branch images/civil.jpg";
import ch from "../../Images/branch images/chemical.jpg";


const Branch = () => {
  return (
    <div>
        <p className="for-branch">Courses</p>
      <div className="cards">
        <div className="card-container">
          <img src={cse} className="card-image" />
          <p className="for-cse">CSE</p>
          <p className="for-sub-para">Computer Science and Engineering: Innovating technology, solving problems, shaping the future.</p>
        </div>
        <div className="card-container">
          <img src={ece} className="card-image" />
          <p className="for-cse">ECE</p>
          <p className="for-sub-para">Electronics and Communication Engineering innovates communication systems and electronic technologies.</p>
        </div>
        <div className="card-container">
          <img src={eee} className="card-image" />
          <p className="for-cse">EEE</p>
          <p className="for-sub-para">Electrical and Electronic Engineering innovates technology with electrical systems, devices.</p>
        </div>
        <div className="card-container">
          <img src={mech} className="card-image" />
          <p className="for-cse">MECH</p>
          <p className="for-sub-para">Mechanical Engineering Innovating machines, systems, and technologies for diverse applications.</p>
        </div>
        <div className="card-container">
          <img src={ce} className="card-image" />
          <p className="for-cse">CE</p>
          <p className="for-sub-para">Civil Engineering designs and constructs infrastructure, shaping the built environment.</p>
        </div>
        <div className="card-container">
          <img src={ch} className="card-image" />
          <p className="for-cse">CH</p>
          <p className="for-sub-para">
Chemical engineering involves applying principles to design and optimize processes.</p>
        </div>
      </div>
    </div>
  )
}

export default Branch;