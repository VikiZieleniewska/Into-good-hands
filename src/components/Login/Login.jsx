import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, FormControl, Button } from "@mui/material";
import Navigation from "../Navigation/Navigation";

import signIn from "../../firebase/signin";
import "./Login.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    if (email == "") {
      setEmailError(true);
    }
    if (password == "") {
      setPasswordError(true);
    }

    if (email && password) {
      const { result, error } = await signIn(email, password);

      if (error) {
        console.log(error);

        setEmail("");
        setPassword("");
        setEmailError(true);
        setPasswordError(true);

        return;
      }

      // console.log(result);

      navigate("/");
    }
  };

  return (
    <div className="login-page">
      <Navigation useScrollLink={false} />
      <div className="login-form">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <h2>Zaloguj się</h2>
          <img
            className="hero-img"
            src="./assets/Decoration.svg"
            alt="Decoration"
          />
          <div className="form">
            <TextField
              id="login-email"
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
              id="login-password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              error={passwordError}
              label="Hasło"
              type="password"
              InputLabelProps={{ shrink: true }}
              variant="standard"
              margin="normal"
            />
          </div>
          <div className="login-buttons">
            <Link to="/rejestracja" className="link-button">
              Załóż konto
            </Link>
            <button className="secondary-button" type="submit">
              Zaloguj się
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
