import React from "react";
import "./ContactSection.scss";
import { TextField } from "@mui/material";

function ContactSection() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div id="contact" className="contact">
      <section>
        <img
          className="contact-img"
          src="./assets/Background-Contact-Form.jpg"
          alt="image"
        />
      </section>

      <section className="form-section">
        <form
          onSubmit={handleSubmit} // </Box>onSubmit={this.handleSubmit} >
        >
          <div className="contact-form">
            <h2>Skontaktój się z nami</h2>
            <img
              className="hero-img"
              src="./assets/Decoration.svg"
              alt="Decoration"
            />
          </div>
          <div className="contact-form">
            <div className="contact-form-row">
              <TextField
                label="Wpisz swoję imię"
                placeholder=""
                type="text"
                InputLabelProps={{ shrink: true }}
                variant="standard"
                margin="normal"
              />
              <TextField
                label="Wpisz swój email"
                type="email"
                InputLabelProps={{ shrink: true }}
                variant="standard"
                margin="normal"
              />
            </div>
            <TextField
              label="Your message"
              type="text"
              multiline
              rows={3}
              sx={{ mt: 2 }}
              fullWidth
              InputLabelProps={{ shrink: true }}
              variant="standard"
              margin="normal"
            />
            <div className="contact-button">
              <button className="secondary-button" type="submit">
                Wyślij
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default ContactSection;
//--------------------------------------------------------------

//-----------------------------------------------------

// import React, { useState } from "react";

// function ContactForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Do something with the form data, e.g., send it to a server

//     // Clear form fields
//     setName("");
//     setEmail("");
//     setMessage("");
//   };

//   return (
//     <div className="contact">
//       <section>
//         <img
//           className="contact-img"
//           src="./assets/Background-Contact-Form.jpg"
//           alt="image"
//         />
//       </section>
//       <section className="contact-form">
//         <h2>Skontaktój się z nami</h2>
//         <img
//           className="hero-img"
//           src="./assets/Decoration.svg"
//           alt="Decoration"
//         />
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Imię:</label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="form-input"
//               placeholder="Wprowadź swoje imię"
//             />
//             <div className="form-underline"></div>
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">E-mail:</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="form-input"
//               placeholder="Wprowadź swój adres e-mail"
//             />
//             <div className="form-underline"></div>
//           </div>

//           <div className="form-group">
//             <label htmlFor="message">Wiadomość:</label>
//             <textarea
//               id="message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               className="form-input"
//               placeholder="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum obcaecati aspernatur sint ipsa reprehenderit sunt magnam aut."
//             ></textarea>
//             <div className="form-underline"></div>
//           </div>

//           <button type="submit">Wyślij</button>
//         </form>
//       </section>
//     </div>
//   );
// }

// export default ContactForm;
