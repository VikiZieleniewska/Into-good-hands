import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import AssociatesTableComponent from "../AssociatesTableComponent/AssociatesTableComponent";
import "./HelpSection.scss";

function HelpSection() {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <div id="foundations" className="helpSection">
      <h2>Komu pomagamy?</h2>

      <img
        className="hero-img"
        src="./assets/Decoration.svg"
        alt="Decoration"
      />
      <div className="helpSection-buttons">
        <Tabs
          value={tabIndex}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#737373",
              transition: "none",
            },
          }}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            className={
              tabIndex === 0
                ? "custom-tab active-tab"
                : "custom-tab inactive-tab"
            }
            label="Fundacjom"
            id="simple-tab-0"
            aria-controls="simple-tabpanel-0"
          />
          <Tab
            className={
              tabIndex === 1
                ? "custom-tab active-tab"
                : "custom-tab inactive-tab"
            }
            label="Organizacjom pozarządowym"
            id="simple-tab-1"
            aria-controls="simple-tabpanel-1"
          />
          <Tab
            className={
              tabIndex === 2
                ? "custom-tab active-tab"
                : "custom-tab inactive-tab"
            }
            label="Lokalnym zbiórkom"
            id="simple-tab-2"
            aria-controls="simple-tabpanel-2"
          />
        </Tabs>
      </div>
      <div
        role="tabpanel"
        hidden={tabIndex !== 0}
        id={`simple-tabpanel-0`}
        aria-labelledby={`simple-tab-0`}
      >
        <div className="tab-content">
          <div className="tab-text">
            W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
            współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
            czego potrzebują.
          </div>
          <AssociatesTableComponent collection="foundations"></AssociatesTableComponent>
        </div>
      </div>
      <div
        className="helpSection-text"
        role="tabpanel"
        hidden={tabIndex !== 1}
        id={`simple-tabpanel-1`}
        aria-labelledby={`simple-tab-1`}
      >
        <div className="tab-content">
          <div className="tab-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi enim
            nam voluptas maiores est impedit facilis!
          </div>
          <AssociatesTableComponent collection="organizations"></AssociatesTableComponent>
        </div>
      </div>
      <div
        className="helpSection-text"
        role="tabpanel"
        hidden={tabIndex !== 2}
        id={`simple-tabpanel-2`}
        aria-labelledby={`simple-tab-2`}
      >
        <div className="tab-content">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi enim
            nam voluptas maiores est impedit facilis!
          </div>
          <AssociatesTableComponent collection="locals"></AssociatesTableComponent>
        </div>
      </div>
    </div>
  );
}

export default HelpSection;
