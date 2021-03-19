import React from "react";
import "./SubsubMenu.css";

function SubsubMenu({ name, price, discription }) {
  return (
    <div className="subsubMenu">
      <div className="subsubMenu__box">
        <div className="subsubMenu__top">
          <p>{name}</p>
          <span>{price}</span>
        </div>
        <div className="subsubMenu__discription">
          <p>{discription}</p>
        </div>
      </div>
    </div>
  );
}

export default SubsubMenu;
