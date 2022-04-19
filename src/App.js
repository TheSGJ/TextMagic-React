import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { Toggle } from './components/Toggle';
import { useDarkMode } from './styles/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';

function App() {
  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
   
      <ThemeProvider theme={themeMode}>
      <Navbar title="TextMagic"/>
        <GlobalStyles />
        <div className="container my-1">
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        <Textform heading="Enter a text, to analyse it."/>
    </ThemeProvider>
  );
}

export default App;
