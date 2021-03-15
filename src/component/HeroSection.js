import React from "react";
import "./HeroSection.css";
import ved from "../assets/video/hero.mp4";

function HeroSection() {
  return (
    <div className="heroSection">
      <div className="heroSection__video">
        <video className="video" autoPlay muted loop src={ved}></video>
      </div>
      <div className="heroSection__discription ">
        <div className="heroSection__discription-tagLine container">
          <p>Food that taste like heaven in your mouth...</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
