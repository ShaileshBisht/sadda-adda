import React from "react";
import "./Chef.css";
import ChefCard from "./ChefCard";
import chefDetails from "../chefJason";

function Chef() {
  console.log(chefDetails);
  return (
    <div className="chef">
      <div className="chef__box container">
        <div className="chef__title">
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
