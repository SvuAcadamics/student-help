import React from "react";
import "./Branch.css";
import { coursesData } from "./Data";

const Branch = () => {
  return (
    <div>
      <h2 className="for-branch">Courses</h2>
      <div className="cards-wrapper">
        <div className="cards ">
          {coursesData.map((course, index) => (
            <div className="col-12 col-sm-6 col-md-4 p-3 card-wrapper">
              <div key={index} className="card-container">
                <div className=" image-container col-sm-6">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="card-image"
                  />
                </div>
              </div>
              <div className="text-container">{course.title}</div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Branch;
