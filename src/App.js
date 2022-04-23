import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import Alert from './components/Alert';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  return (
    <Router>
    <ThemeProvider theme={themeMode}>
      <Navbar title="TextMagic"/>
      <Alert alert={alert}/>
        
    </ThemeProvider>
    <Routes>
      <Route path="/" element={<Textform showAlert={showAlert} heading="Enter a text, to analyse it."/>} />
      <Route path="/about" element={<About />}>
      </Route>
    </Routes>
  </Router>
      
  );
}

export default App;
