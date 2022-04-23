import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import Alert from './components/Alert';
import { Toggle } from './components/Toggle';
import { useDarkMode } from './styles/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
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
        <GlobalStyles />
         <div className="container">
           <Toggle theme={theme} toggleTheme={toggleTheme} />
         </div>
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
