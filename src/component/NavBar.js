import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navBar">
      <div className="navBar-container">
        <div className="navBar__logo">
          <h1>sadda-adda</h1>
        </div>
        <div className="navBar__menu">
          <a href="#" className="navBar__link">
            home
          </a>
          <a href="#" className="navBar__link">
            menu
          </a>
          <a href="#" className="navBar__link">
            chef
          </a>
          <a href="#" className="navBar__link">
            about
          </a>
          <a href="#" className="navBar__link">
            contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
