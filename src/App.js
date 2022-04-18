import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <>
      <Navbar title="TextMagic"/>
      <div className="pull-left">
        <ThemeToggle />
      </div>
      <Textform heading="Enter a text, to analyse it."/>
    </>
  );
}

export default App;
