import React from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import "./HelpSection.scss";

function HelpSection() {
  const [tabIndex, setTabIndex] = React.useState(0);
  const [pageIndex, setPageIndex] = React.useState(0);
  const pageSize = 3;

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
    setPageIndex(0);
  };

  const foundations = [
    {
      title: `Fundacja "Dbam o Zdrowie`,
      description: `Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.`,
      tags: `ubrania, jedzenie, sprzęt AGD, meble, zabawki`,
    },
    {
      title: `Fundacja "Dla dzieci"`,
      description: `Cel i misja: Pomoc dzieciom z ubogich rodzin.`,
      tags: `ubrania, meble, zabawki`,
    },
    {
      title: `Fundacja "Bez domu"`,
      description: `Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.`,
      tags: `ubrania, jedzenie, ciepłe koce`,
    },
    {
      title: `Fundacja "Dla Seniorów"`,
      description: `Cel i misja: Pomoc osobom starszym w trudnej sytuacji życiowej.`,
      tags: ` opieka medyczna, pomoc domowa, aktywności rekreacyjne`,
    },
    {
      title: `Fundacja "Dla Zwierząt"`,
      description: `Cel i misja: Pomoc bezdomnym zwierzętom i ochrona praw zwierząt.`,
      tags: `adopcje, karmienie, opieka weterynaryjna`,
    },
    {
      title: `Fundacja "Edukacja Plus"`,
      description: `Cel i misja: Wspieranie edukacji dzieci i młodzieży z rodzin o niskich dochodach.`,
      tags: `materiały szkolne, korepetycje, stypendia`,
    },
    {
      title: `Fundacja "Dla Osób Niepełnosprawnych"`,
      description: `Cel i misja: Pomoc osobom z niepełnosprawnościami w codziennym funkcjonowaniu.`,
      tags: `sprzęt rehabilitacyjny, transport, wsparcie psychologiczne`,
    },
    {
      title: `Fundacja "Dla Osób Chorych na Raka"`,
      description: `Cel i misja: Pomoc pacjentom z diagnozą nowotworu i ich rodzinom.`,
      tags: `wsparcie medyczne, opieka paliatywna, rehabilitacja`,
    },
    {
      title: `Fundacja "Dla Środowiska"`,
      description: `Cel i misja: Ochrona środowiska naturalnego i promowanie zrównoważonego rozwoju.`,
      tags: `zbiórki surowców wtórnych, sadzenie drzew, edukacja ekologiczna`,
    },
  ];

  const organizations = [
    {
      title: `Organizacja "Lorem Ipsum 1"`,
      description: `Quis varius quam quisque id diam vel quam elementum pulvinar.`,
      tags: `Egestas, sed, tempus`,
    },
    {
      title: `Organizacja "Lorem Ipsum 2"`,
      description: `Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.`,
      tags: `Ut, aliquam, purus, sit, amet`,
    },
    {
      title: `Organizacja "Lorem Ipsum 3"`,
      description: `Scelerisque in dictum non consectetur a erat nam.`,
      tags: `Mi, quis, hendrerit, dolor`,
    },
    {
      title: `Organizacja "Lorem Ipsum 4"`,
      description: `Quis varius quam quisque id diam vel quam elementum pulvinar.`,
      tags: `Egestas, sed, tempus`,
    },
    {
      title: `Organizacja "Lorem Ipsum 5"`,
      description: `Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.`,
      tags: `Ut, aliquam, purus, sit, amet`,
    },
    {
      title: `Organizacja "Lorem Ipsum 6"`,
      description: `Scelerisque in dictum non consectetur a erat nam.`,
      tags: `Mi, quis, hendrerit, dolor`,
    },
  ];

  const locals = [
    {
      title: `Zbiórka "Lorem Ipsum 1"`,
      description: `Quis varius quam quisque id diam vel quam elementum pulvinar.`,
      tags: `Egestas, sed, tempus`,
    },
    {
      title: `Zbiórka "Lorem Ipsum 2"`,
      description: `Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.`,
      tags: `Ut, aliquam, purus, sit, amet`,
    },
    {
      title: `Zbiórka "Lorem Ipsum 3"`,
      description: `Scelerisque in dictum non consectetur a erat nam.`,
      tags: `Mi, quis, hendrerit, dolor`,
    },
  ];

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
            style: { backgroundColor: "#737373", transition: "none" },
          }}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            className={tabIndex === 0 ? "active-tab" : "inactive-tab"}
            label="Fundacjom"
            id="simple-tab-0"
            aria-controls="simple-tabpanel-0"
          />
          <Tab
            className={tabIndex === 1 ? "active-tab" : "inactive-tab"}
            label="Organizacjom pozarządowym"
            id="simple-tab-1"
            aria-controls="simple-tabpanel-1"
          />
          <Tab
            className={tabIndex === 2 ? "active-tab" : "inactive-tab"}
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
          <div className="table">
            {foundations
              .slice(pageIndex * pageSize, pageIndex * pageSize + pageSize)
              .map((foundation, index) => {
                return (
                  <div key={`foundation-${index}`} className="table-row">
                    <div className="row-text">
                      <h3>{foundation.title}</h3>
                      <p>{foundation.description}</p>
                    </div>
                    <div className="row-tags">{foundation.tags}</div>
                  </div>
                );
              })}
            <div className="table-pagination">
              <button
                className={pageIndex === 0 ? "secondary-button" : "link-button"}
                onClick={() => setPageIndex(0)}
              >
                1
              </button>
              <button
                className={pageIndex === 1 ? "secondary-button" : "link-button"}
                onClick={() => setPageIndex(1)}
              >
                2
              </button>
              <button
                className={pageIndex === 2 ? "secondary-button" : "link-button"}
                onClick={() => setPageIndex(2)}
              >
                3
              </button>
            </div>
          </div>
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
          <div className="table">
            {organizations
              .slice(pageIndex * pageSize, pageIndex * pageSize + pageSize)
              .map((organization, index) => {
                return (
                  <div key={`organization-${index}`} className="table-row">
                    {organization.title}
                    {organization.description}
                    {organization.tags}
                  </div>
                );
              })}
            <div className="table-pagination">
              <button
                className={pageIndex === 0 ? "secondary-button" : "link-button"}
                onClick={() => setPageIndex(0)}
              >
                1
              </button>
              <button
                className={pageIndex === 1 ? "secondary-button" : "link-button"}
                onClick={() => setPageIndex(1)}
              >
                2
              </button>
            </div>
          </div>
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
          <div className="table">
            {locals
              .slice(pageIndex * pageSize, pageIndex * pageSize + pageSize)
              .map((local, index) => {
                return (
                  <div key={`local-${index}`} className="table-row">
                    {local.title}
                    {local.description}
                    {local.tags}
                  </div>
                );
              })}
            <div className="table-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpSection;
