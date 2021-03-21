import React, { useEffect } from "react";
import "./ChefCard.css";
import AOS from "aos";
import "aos/dist/aos.css";

function ChefCard({ name, disp, imgSrc }) {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="chefCard" data-aos="zoom-out-up">
      <div className="chefCard__box">
        <div className="chefCardBox-inner">
          <img src={imgSrc} alt="" />
        </div>
        <div className="chefCardBox-outer">
          <div className="chefCardBox-outeribox">
            <h1>{name}</h1>
            <p>{disp}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChefCard;
