import React, { useEffect } from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns/HomeThreeColumns";
import StepsSection from "./StepsSection/StepsSection";
import AboutSection from "./AboutSection";
import HelpSection from "./HelpSection/HelpSection";
import ContactSection from "./ContactSection/ContactSection";
import Footer from "./Footer/Footer";
import { scroller } from "react-scroll";

function Home() {
  const hash = window.location.hash.substring(1);

  useEffect(() => {
    const scrollToSection = () => {
      if (hash) {
        scroller.scrollTo(hash, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      }
    };
    scrollToSection();
  }, [hash]);

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
      <HelpSection />
      {/* Sekcja "Kontakt" */}
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;
