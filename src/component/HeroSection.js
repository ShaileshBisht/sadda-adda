import React from "react";
import "./HeroSection.css";
import ved from "../assets/video/hero.mp4";

function HeroSection() {
  return (
    <div className="heroSection">
      <div className="heroSection_video">
        <video className="video" autoPlay muted loop src={ved}></video>
      </div>
    </div>
  );
}

export default HeroSection;
