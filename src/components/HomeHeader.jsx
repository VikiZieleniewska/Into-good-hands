import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../scss/settings/_HomeHeader.scss";

const HomeHeader = () => {
  return (
    <div className="navigation">
      {/* Górne menu */}
      <nav className="upper-menu">
        <ul>
          <li>
            <Link to="/login">Zaloguj</Link>
          </li>
          <li>
            <Link to="/signup">Załóż konto</Link>
          </li>
        </ul>
      </nav>

      {/* Dolne menu */}
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
    </div>
  );
};

export default HomeHeader;
