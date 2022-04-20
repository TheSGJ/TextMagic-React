import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
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
  return (
    <Router>
    <ThemeProvider theme={themeMode}>
      <Navbar title="TextMagic"/>
        <GlobalStyles />
        <div className="container my-1">
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        </div>
    </ThemeProvider>
    <Routes>
      <Route path="/" element={<Textform heading="Enter a text, to analyse it."/>} />
      <Route path="/about" element={<About />}>
      </Route>
    </Routes>
  </Router>
      
  );
}

export default App;
