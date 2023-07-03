import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer-content">
      <div className="copyright">
        &copy; 2023 Your Company. All rights reserved.
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <img
            className="social-img"
            src="./assets/Facebook.svg"
            alt="Facebook"
          />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <img
            className="social-img"
            src="./assets/Instagram.svg"
            alt="Instagram"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
