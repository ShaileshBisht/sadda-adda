import React, { useEffect } from "react";
import "./About.css";
import aboutIMG from "../assets/about/aboutIMG.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="about">
      <div className="about__box">
        <div className="container">
          <div className="about__content">
            <div className="about__left" data-aos="fade-right">
              <span>about us</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam dignissimos omnis eaque, nesciunt porro sapiente eum
                molestias sequi maxime, dicta reiciendis expedita adipisci. Quam
                hic distinctio aliquid molestias fugit facere, exercitationem
                quos quidem eveniet impedit dolorem magni laboriosam quaerat
                earum sint autem iusto aperiam repellendus architecto natus.
                Debitis, unde error.
              </p>
            </div>

            <div className="about__right" data-aos="zoom-in">
              <img src={aboutIMG} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
