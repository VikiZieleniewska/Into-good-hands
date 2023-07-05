import React from "react";
import "./AboutSection.scss";

function AboutSection() {
  return (
    <div id="about-us" className="about about-us">
      <section>
        <div className="about-text">
          <h2>O nas</h2>
          <img
            className="hero-img"
            src="./assets/Decoration.svg"
            alt="Decoration"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            quisquam libero itaque cum voluptatem? Earum, aliquid nobis.
          </p>
        </div>
        <div className="signature">
          <img src="./assets/Signature.svg" alt="Signature" />
        </div>
      </section>
      <section>
        <img className="about-img" src="./assets/People.jpg" alt="People" />
      </section>
    </div>
  );
}

export default AboutSection;
