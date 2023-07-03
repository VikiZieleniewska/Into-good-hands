import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Navigation.scss";

function Navigation({ useScrollLink }) {
  let lowerMenu;

  if (useScrollLink) {
    lowerMenu = (
      <nav className="lower-menu">
        <ul>
          <li>
            <ScrollLink
              to="start"
              smooth={true}
              duration={500}
              offset={-50}
              spy={true}
              exact="true"
              activeClass="active"
            >
              Start
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="how-it-works"
              smooth={true}
              duration={500}
              offset={-50}
              spy={true}
              exact="true"
              activeClass="active"
            >
              O co chodzi?
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about-us"
              smooth={true}
              duration={500}
              offset={-50}
              spy={true}
              exact="true"
              activeClass="active"
            >
              O nas
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="foundations"
              smooth={true}
              duration={500}
              offset={-50}
              spy={true}
              exact="true"
              activeClass="active"
            >
              Fundacje i organizacje
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-50}
              spy={true}
              exact="true"
              activeClass="active"
            >
              Kontakt
            </ScrollLink>
          </li>
        </ul>
      </nav>
    );
  } else {
    lowerMenu = (
      <nav className="lower-menu">
        <ul>
          <li>
            <Link to="/#start">Start</Link>
          </li>
          <li>
            <Link to="/#how-it-works">O co chodzi?</Link>
          </li>
          <li>
            <Link to="/#about-us">O nas</Link>
          </li>
          <li>
            <Link to="/#foundations">Fundacje i organizacje</Link>
          </li>
          <li>
            <Link to="/#contact">Kontakt</Link>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <div className="navigation">
      {/* Górne menu */}
      <nav className="upper-menu">
        <ul>
          <li>
            <Link to="/logowanie">Zaloguj</Link>
          </li>
          <li>
            <Link to="/rejestracja">Załóż konto</Link>
          </li>
        </ul>
      </nav>

      {/* Dolne menu */}
      {lowerMenu}
    </div>
  );
}

export default Navigation;
