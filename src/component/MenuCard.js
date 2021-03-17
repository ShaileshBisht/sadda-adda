import React from "react";
import "./MenuCard.css";
import { useDispatch } from "react-redux";
import { menuTitle } from "../features/counter/menuSlice";

function MenuCard({ name, imgSrc }) {
  const disptach = useDispatch();

  const subMenu = () => {
    disptach(menuTitle(name));
  };

  return (
    <div className="menuCard" onClick={subMenu}>
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
