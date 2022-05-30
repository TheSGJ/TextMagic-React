import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import Alert from "./components/Alert";
import CookieConsent from "react-cookie-consent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <Router>
      <Navbar title="TextMagic" />
      <Alert alert={alert} />
      <Routes>
        <Route
          path="/"
          element={
            <Textform
              showAlert={showAlert}
              heading="Enter a text, to analyse it."
            />
          }
        />
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <CookieConsent
        location="bottom"
        buttonText="Agree"
        cookieName="txtmc"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
       We use cookies to enhance the user experience.{" "}
      </CookieConsent>
    </Router>
  );
}

export default App;
