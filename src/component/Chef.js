import React, { useEffect } from "react";
import "./Chef.css";
import ChefCard from "./ChefCard";
import chefDetails from "../chefJason";
import AOS from "aos";
import "aos/dist/aos.css";

function Chef() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="chef">
      <div className="chef__box container">
        <div
          className="chef__title"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <h1>our chef</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, et.
          </p>
        </div>
        <div className="chef__card">
          {chefDetails.map(({ id, name, disp, imgSrc }) => (
            <ChefCard key={id} name={name} disp={disp} imgSrc={imgSrc} />
          ))}
          {/* <ChefCard />
    <ChefCard />
    <ChefCard /> */}
        </div>
      </div>
    </div>
  );
}

export default Chef;
