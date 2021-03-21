import React, { useEffect } from "react";
import "./Menu.css";
import MenuCard from "./MenuCard";
import outerMenu from "../outerMenu";
import AOS from "aos";
import "aos/dist/aos.css";

function Menu() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="menu">
      <div className="menu__box container">
        <div
          className="menu__title"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <h1>our menu</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, et.
          </p>
        </div>
        <div className="menu__card">
          {outerMenu.map(({ id, name, imgSrc }) => (
            <MenuCard key={id} name={name} imgSrc={imgSrc} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
