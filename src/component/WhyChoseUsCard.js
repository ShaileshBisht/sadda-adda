import React from "react";
import "./WhyChoseUsCard.css";
import img1 from "../assets/chooseUs/img1.png";

function WhyChoseUsCard() {
  return (
    <div className="whyCoseUsCard">
      <div className="whyCoseUsCard__top">
        <div className="whyCoseUsCard__top-left">
          <img className="whyChoseUs__img" src={img1} alt="" />
        </div>
        <div className="whyCoseUsCard__top-right">
          <p>sample headline</p>
        </div>
      </div>
      <div className="whyCoseUsCard__bottom">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores magni
          minus enim nobis! Odio officiis, vitae veniam eum, consectetur.
        </p>
      </div>
    </div>
  );
}

export default WhyChoseUsCard;
