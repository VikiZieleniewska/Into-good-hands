import React from "react";
import { Link } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import "./HomeHeader.scss";

function HomeHeader() {
  return (
    <div id="start" className="hero start">
      <section className="hero-image">
        <img
          className="menu__img"
          src="./assets/Home-Hero-Image.jpg"
          alt="Decoration"
        />
      </section>
      <section>
        <Navigation useScrollLink />
        <div className="hero-text">
          <h2>Zacznij pomagać!</h2>
          <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>

          <img
            className="hero-img"
            src="./assets/Decoration.svg"
            alt="Decoration"
          />
          <div className="hero-buttons">
            <button className="primary-button" type="button">
              <Link to="/logowanie">ODDAJ RZECZY</Link>
            </button>
            <button className="primary-button" type="button">
              <Link to="/logowanie">ZORGANIZUJ ZBIÓRKĘ</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeHeader;
