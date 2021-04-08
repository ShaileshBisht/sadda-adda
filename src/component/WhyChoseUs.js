import React from "react";
import "./WhyChoseUs.css";
import WhyChoseUsCard from "./WhyChoseUsCard";

function WhyChoseUs() {
  return (
    <div className="whyChoseUs">
      <div className="whyChoseUS__box container">
        <div className="whyChoseUs__title">
          <h1>why choose us</h1>
        </div>
        <div className="whyChoseUs__card">
          <WhyChoseUsCard />
        </div>
      </div>
    </div>
  );
}

export default WhyChoseUs;
