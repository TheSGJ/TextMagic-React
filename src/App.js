import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { Toggle } from './components/Toggle';
import { useDarkMode } from './styles/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles';
import styled, { ThemeProvider } from 'styled-components';

const Container = styled.div`
  
  
`;

function App() {
  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    

      
      
      <ThemeProvider theme={themeMode}>
      <Navbar title="TextMagic"/>
      <Container>
        <GlobalStyles />
        <div className="container my-1">
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        <Textform heading="Enter a text, to analyse it."/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
