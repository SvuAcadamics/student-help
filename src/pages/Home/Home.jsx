import React from "react";
import "./Home.css";
import Branch from "../../components/Branch/Branch";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Video from '../../Images/college.mp4'

function Home() {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };
  const registration = () => {
    navigate("/registration");
  };
  return (
    <div className="home">
      <div className="for-home-screen">
        <div className="videoTag">
      <video src={Video} type="video/mp4" autoPlay loop muted/>
        </div>
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
            <Button buttonText="Login" onClick={login} />
            <Button buttonText="Registration" onClick={registration} />
          </div>
        </div>
        
      </div>
        
      
      <Branch />
    </div>
  );
}

export default Home;
