import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  return (
    <>
      <Navbar title="TextMagic"/>
      <Textform heading="Enter a text, to analyse it."/>
    </>
  );
}

export default App;
