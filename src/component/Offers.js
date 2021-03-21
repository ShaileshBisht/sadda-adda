import React from "react";
import "./Offers.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import offer1 from "../assets/offers/offer1.jpg";
import offer2 from "../assets/offers/offer2.jpg";
import offer3 from "../assets/offers/offer3.jpg";
import offer4 from "../assets/offers/offer4.jpg";

function Offers() {
  return (
    <div className="offers ">
      <div className="offers__box container">
        <div className="offer__title">
          <h1>our best offers</h1>
        </div>
        <div className="offer__caroursel"></div>
        <Carousel
          dynamicHeight={true}
          infiniteLoop={true}
          autoPlay={true}
          showArrows={true}
          transitionTime="1"
          verticalSwipe="vertical"
          emulateTouch={true}
          swipeable={true}
        >
          <div>
            <img src={offer1} alt="" />
            <p className="legend">offers 1</p>
          </div>
          <div>
            <img src={offer2} alt="" />
            <p className="legend">offers 2</p>
          </div>
          <div>
            <img src={offer3} alt="" />
            <p className="legend">offers 3</p>
          </div>
          <div>
            <img src={offer4} alt="" />
            <p className="legend">offers 4</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Offers;
