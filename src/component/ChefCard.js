import React from "react";
import "./ChefCard.css";
import chef1 from "../assets/chef/chef1.jpg";

function ChefCard({ name, disp, imgSrc }) {
  return (
    <div className="chefCard">
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
