import React from "react";
import "./SubMenu.css";
import SubsubMenu from "./SubsubMenu";

function SubMenu() {
  return (
    <div className="subMenu">
      <div className="subMenu__box container">
        <div className="subMenu__top">
          <p>burger</p>
        </div>
        <div className="subMenu__bottom">
          <SubsubMenu />
          <SubsubMenu />
          <SubsubMenu />
          <SubsubMenu />
        </div>
      </div>
    </div>
  );
}

export default SubMenu;
