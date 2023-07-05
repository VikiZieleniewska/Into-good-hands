import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import Singup from "./components/Singup/Singup";
import Logout from "./components/Logout/Logout";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logowanie" element={<Login />} />
          <Route path="/rejestracja" element={<Singup />} />
          <Route path="/wylogowanie" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
