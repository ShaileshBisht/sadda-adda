import React from "react";
import "./Chef.css";
import ChefCard from "./ChefCard";

function Chef() {
  return (
    <div className="chef">
      <div className="chef__box container">
        <div className="chef__title">
          <h1>our chef</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, et.
          </p>
        </div>
        <div className="chef__box">
          <ChefCard />
        </div>
      </div>
    </div>
  );
}

export default Chef;
