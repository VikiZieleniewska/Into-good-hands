import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, FormControl, Button } from "@mui/material";
import Navigation from "../Navigation/Navigation";

import signUp from "../../firebase/signup";
import "./Singup.scss";

const Singup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordRepeatError, setPasswordRepeatError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setEmailError(false);
    setPasswordError(false);
    setPasswordRepeatError(false);

    if (email == "") {
      setEmailError(true);
    }

    if (password == "") {
      setPasswordError(true);
    }

    if (passwordRepeat == "") {
      setPasswordRepeatError(true);
    }

    const passwordMatch = password === passwordRepeat;

    if (!passwordMatch) {
      setPassword("");
      setPasswordRepeat("");
      setPasswordError(true);
      setPasswordRepeatError(true);
    }

    if (email && password && passwordRepeat && passwordMatch) {
      const { result, error } = await signUp(email, password);

      if (error) {
        console.log(error);

        setEmail("");
        setPassword("");
        setPasswordRepeat("");
        setEmailError(true);
        setPasswordError(true);
        setPasswordRepeatError(true);

        return;
      }

      // console.log(result);

      navigate("/");
    }
  };

  return (
    <div className="singup-page">
      <Navigation />
      <div className="singup-form">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <h2>Załóż konto</h2>
          <img
            className="hero-img"
            src="./assets/Decoration.svg"
            alt="Decoration"
          />
          <div className="form">
            <TextField
              id="singup-email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              error={emailError}
              label="Email"
              placeholder=""
              type="text"
              InputLabelProps={{ shrink: true }}
              variant="standard"
              margin="normal"
            />
            <TextField
              sx={{ mb: 2 }}
              id="singup-password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              error={passwordError}
              label="Hasło"
              type="password"
              InputLabelProps={{ shrink: true }}
              variant="standard"
              margin="normal"
            />
            <TextField
              sx={{ mb: 2 }}
              id="login-password"
              onChange={(e) => setPasswordRepeat(e.target.value)}
              value={passwordRepeat}
              error={passwordRepeatError}
              label="Powtórz hasło"
              type="password"
              InputLabelProps={{ shrink: true }}
              variant="standard"
              margin="normal"
            />
          </div>
          <div className="singup-buttons">
            <Link to="/logowanie" className="link-button">
              Zaloguj się
            </Link>
            <button
              className="secondary-button"
              variant="outlined"
              type="submit"
            >
              Załóż konto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Singup;
