import React from "react";
import "./ChefCard.css";
import chef1 from "../assets/chef/chef1.jpg";

function ChefCard() {
  return (
    <div className="chefCard">
      <div className="chefCard__box">
        <div className="chefCardBox-inner">
          <img src={chef1} alt="" />
        </div>
        <div className="chefCardBox-outer">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            magnam in magni reiciendis. Tempore, quo. Quisquam eum accusantium
            architecto neque?
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChefCard;
