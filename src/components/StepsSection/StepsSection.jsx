import React from "react";
import "./StepsSection.scss";

function StepsSection() {
  return (
    <div className="box how-it-works">
      <section className="upper-box">
        <div className="steps">
          <h2>Wystarczą 4 proste kroki</h2>
          <img
            className="hero-img"
            src="./assets/Decoration.svg"
            alt="Decoration"
          />
        </div>
      </section>
      <section className="midle-box">
        <div className="step">
          <img
            className="step-icon"
            src="./assets/Icon-1.svg"
            alt="icon t-shirt"
          />
          <p className="step-title">Wybierz rzeczy</p>
          <p className="step-description">ubrania, zabawki, sprzęt i inne</p>
        </div>
        <div className="step">
          <img className="step-icon" src="./assets/Icon-2.svg" alt="icon bag" />
          <p className="step-title">Spakuj</p>
          <p className="step-description">skorzystaj z worków na śmieci</p>
        </div>
        <div className="step">
          <img
            className="step-icon"
            src="./assets/Icon-3.svg"
            alt="icon loupe"
          />
          <p className="step-title">Zdecyduj komu chcesz pomóc</p>
          <p className="step-description">wybierz zaufane miejsce</p>
        </div>
        <div className="step">
          <img
            className="step-icon"
            src="./assets/Icon-4.svg"
            alt="icon kurier"
          />
          <p className="step-title">Zamów kuriera</p>
          <p className="step-description">
            kurier przyjedzie w dogodnym terminie
          </p>
        </div>
      </section>
      <button className="primary-button lower-box" type="button">
        ODDAJ RZECZY
      </button>
    </div>
  );
}

export default StepsSection;
