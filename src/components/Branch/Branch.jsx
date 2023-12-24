import React from "react";
import "./Branch.css";
import { coursesData } from "./Data";


const Branch = () => {
  return (
    <div>
      <p className="for-branch">Courses</p>
      <div className="cards-wrapper">
      <div className="cards gx-3">
          {coursesData.map((course, index) => (
            <div className="col-12 col-sm-6 col-md-4 p-3 card-wrapper">
            <div key={index} className="card-container">
              <div className="col-12 image-container col-sm-6">
                <img src={course.image} alt={course.title} className="card-image" />
              </div>
              <div className="col-12 col-sm-6">
                <p className="for-cse">{course.title}</p>
                <p className="for-sub-para">{course.description}</p>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Branch;
