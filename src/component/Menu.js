import React from "react";
import "./Menu.css";
import MenuCard from "./MenuCard";

function Menu() {
  return (
    <div className="menu ">
      <div className="menu__box container">
        <div className="menu__title">
          <h1>our menu</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, et.
          </p>
        </div>
        <div className="menu__card">
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
      </div>
    </div>
  );
}

export default Menu;
