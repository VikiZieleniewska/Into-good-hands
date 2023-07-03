import React from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns/HomeThreeColumns";
import StepsSection from "./StepsSection/StepsSection";
import AboutSection from "./AboutSection";
// import HelpSection from "./HelpSection";
import ContactSection from "./ContactSection/ContactSection";
import Footer from "./Footer/Footer";

function Home() {
  return (
    <>
      {/* Sekcja główna */}
      <HomeHeader />
      {/* Sekcja z trzema kolumnami */}
      <HomeThreeColumns />
      {/* Sekcja "Wystarczą 4 proste kroki" */}
      <StepsSection />
      {/* Sekcja "O nas" */}
      <AboutSection />
      {/* Sekcja "Komu pomagamy" */}
      {/* <HelpSection /> */}
      {/* Sekcja "Kontakt" */}
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;
