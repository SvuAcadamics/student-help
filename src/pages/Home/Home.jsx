import React from "react";
import "./Home.css";
import side from "../../Images/home_assert-1.png";
import Branch from "../../components/Branch/Branch";

function Home() {
  return (
    <div className="home">
      <div className="for-home-screen">
        <div className="explore">
          <p className="for-start-para">Explore</p>
          <p className="for-middle-para">
            A roadmap to <span className="coloredtext">knowledge</span>, a
            compass for <span className="coloredtext">acadamic</span>{" "}
            exploration
          </p>
          <p className="home-para">
            Access all your syllabus and question papers at once,
            <span className="coloredtext"> Learn Now</span>, Make it{" "}
            <span className="coloredtext">Climb</span>, Make your stuff cleaner.
          </p>
          <div className="for-buttons">
            <button className="for-but">Login</button>
            <button className="for-but">Sign up</button>
          </div>
        </div>
        <div className="for-image-div">
          <img className="for-home-img" src={side} />
        </div>
      </div>
      <Branch/>
    </div>
  );
}

export default Home;
