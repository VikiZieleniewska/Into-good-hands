import React from "react";
import "./AboutSection.scss";

function AboutSection() {
  return (
    <div className="about about-us">
      <section className="">
        <div className="about-text">
          <h2>O nas</h2>
          <img
            className="hero-img"
            src="./assets/Decoration.svg"
            alt="Decoration"
          />
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            quisquam libero itaque cum voluptatem? Earum, aliquid nobis.
          </p>
        </div>
        <div className="signature">
          <img src="./assets/Signature.svg" alt="Signature" />
        </div>
      </section>
      <section className="">
        <img className="about-img" src="./assets/People.jpg" alt="People" />
      </section>
    </div>
  );
}

export default AboutSection;

// import React from "react";
// import styles from "./AboutSection.scss";

// function AboutSection() {
//   return (
//     <div className={styles.about}>
//       <section>
//         <div className="about-text">
//           <h2>O nas</h2>
//           <img
//             className="hero-img"
//             src="./assets/Decoration.svg"
//             alt="Decoration"
//           />
//           <p className="">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
//             quisquam libero itaque cum voluptatem? Earum, aliquid nobis.
//           </p>
//         </div>
//       </section>
//       <section className="">
//         <img className="about-img" src="./assets/People.jpg" alt="People" />
//       </section>
//     </div>
//   );
// }

// export default AboutSection;
