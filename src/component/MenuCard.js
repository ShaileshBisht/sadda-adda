import React from "react";
import "./MenuCard.css";
import img1 from "../assets/menu/burger.jpg";

function MenuCard() {
  return (
    <div className="menuCard">
      <div className="menuCard__img">
        <img src={img1} alt="" />
      </div>
    </div>
  );
}

export default MenuCard;
