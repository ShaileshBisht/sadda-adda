import React from "react";
import "./MenuCard.css";
import img1 from "../assets/menu/burger.jpg";

function MenuCard({ name, imgSrc }) {
  return (
    <div className="menuCard">
      <div className="menuCard__img">
        <img src={imgSrc} alt="" />
      </div>
      <div className="menuCard__name">
        <p>{name}</p>
      </div>
    </div>
  );
}

export default MenuCard;
