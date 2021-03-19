import React, { useState } from "react";
import "./SubMenu.css";
import SubsubMenu from "./SubsubMenu";
import { useSelector } from "react-redux";
import { selectMenu } from "../features/counter/menuSlice";
import innerMenu from "../innerMenu";

function SubMenu() {
  const currentMenu = useSelector(selectMenu);
  console.log(currentMenu.payload);

  const menuData = innerMenu.filter(
    (menu) => menu.type === currentMenu.payload
  );

  console.log(menuData);

  return (
    <div className="subMenu">
      <div className="subMenu__box container">
        <div className="subMenu__top">
          <p>{currentMenu.payload}</p>
        </div>
        <div className="subMenu__bottom">
          {menuData?.map(({ id, name, price, discription }) => (
            <SubsubMenu key={id} price={price} name={name} disp={discription} />
          ))}

          {/* <SubsubMenu />
          <SubsubMenu />
          <SubsubMenu />
          <SubsubMenu />
          <SubsubMenu />
          <SubsubMenu />
          <SubsubMenu />
          <SubsubMenu /> */}
        </div>
      </div>
    </div>
  );
}

export default SubMenu;
