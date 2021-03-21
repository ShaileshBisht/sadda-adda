import React, { useEffect } from "react";
import "./MenuCard.css";
import { useDispatch } from "react-redux";
import { menuTitle } from "../features/counter/menuSlice";
import { useHistory } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function MenuCard({ name, imgSrc }) {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const disptach = useDispatch();
  const history = useHistory();

  const subMenu = () => {
    disptach(menuTitle(name));
    history.push("/submenu");
  };

  return (
    <div className="menuCard" onClick={subMenu} data-aos="flip-up">
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
