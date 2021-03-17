import React from "react";
import "./MenuCard.css";
import { useDispatch } from "react-redux";
import { menuTitle } from "../features/counter/menuSlice";
import { useHistory } from "react-router-dom";

function MenuCard({ name, imgSrc }) {
  const disptach = useDispatch();
  const history = useHistory();

  const subMenu = () => {
    disptach(menuTitle(name));
    history.push("/submenu");
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
