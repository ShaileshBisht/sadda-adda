import React from "react";
import "./Footer.css";
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import ExploreIcon from "@material-ui/icons/Explore";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__box container">
        <div className="footer__left">
          <span>thanks for visiting</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            tenetur?
          </p>
          <p>(+91)-1234567890</p>
        </div>
        <div className="footer__right">
          <div className="footer__right-top">
            <p>get to know us better</p>
          </div>
          <div className="footer__right-icon">
            <IconButton aria-label="delete">
              <a href="#">
                <InstagramIcon />
              </a>
            </IconButton>
            <IconButton aria-label="delete">
              <a href="#">
                <FacebookIcon />
              </a>
            </IconButton>
            <IconButton aria-label="delete">
              <a href="#">
                <ExploreIcon />
              </a>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
