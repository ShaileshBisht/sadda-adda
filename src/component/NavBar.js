import React, { useState } from "react";
import "./NavBar.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router";

function NavBar() {
  const history = useHistory();
  const [toggleBtn, setToggleBtn] = useState(false);

  return (
    <div className="navBar ">
      <div
        className={
          toggleBtn
            ? "navBar-container container active"
            : "navBar-container container"
        }
      >
        <div className="navBar__logo">
          <h1>sadda-adda</h1>
        </div>
        <div className={toggleBtn ? "navBar__menu active" : "navBar__menu"}>
          <a href="#" className="navBar__link">
            home
          </a>
          <a href="#about" className="navBar__link">
            about
          </a>
          <a href="#menu" className="navBar__link">
            menu
          </a>
          <a href="#" className="navBar__link">
            chef
          </a>
          <p
            onClick={() => history.push("./offers")}
            className="navBar__link offer"
          >
            %offers%
          </p>
        </div>
        <div className="navBar__toggleButton">
          <IconButton onClick={() => setToggleBtn(!toggleBtn)}>
            {toggleBtn ? (
              <CloseIcon fontSize="large" style={{ color: "yellow" }} />
            ) : (
              <MenuIcon fontSize="large" style={{ color: "yellow" }} />
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
