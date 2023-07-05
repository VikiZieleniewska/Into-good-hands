import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Logout.scss";

function Logout() {
  const navigate = useNavigate();

  const handleClick = async (event) => {
    event.preventDefault();

    navigate("/");
  };

  return (
    <div className="logout-page">
      <Navigation useScrollLink={false} />
      <div className="logout-form">
        <h2>Wylogowanie nastąpiło pomyślnie!</h2>
        <img
          className="hero-img"
          src="./assets/Decoration.svg"
          alt="Decoration"
        />

        <div className="logout-buttons">
          <button
            className="secondary-button"
            type="button"
            onClick={handleClick}
          >
            Strona główna
          </button>
        </div>
      </div>
    </div>
  );
}

export default Logout;
