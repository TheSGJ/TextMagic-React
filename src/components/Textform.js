import React, { useState } from "react";

export default function Textform(props) {
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleUpsClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLosClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const minifyCss = () => {
    let newText = text
      .replace(/([^0-9a-zA-Z.#])\s+/g, "$1")
      .replace(/\s([^0-9a-zA-Z.#]+)/g, "$1")
      .replace(/;}/g, "}");
    setText(newText);
  };
  //to capitalise first text of the sentence
  const handleCapFirst = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
  };
  //remove all the symbols
  const handleTxtExtract = () => {
    const regex = /[0-9/A-Z/a-z/ /]/g;

    const letters = text.match(regex);
    const res1 = letters.join("");
    setText(res1);
  };

  //to extract only the numbers in the text:
  const handleNumExtract = () => {
    const regex = /[0-9/ /]/g;
    const digits = text.match(regex);
    const res = digits.join("");
    setText(res);
  };

  const handleReverse = (event) => {
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
  };
  // function to use Text to speech:
  const handleSpeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  // using the useState!
  const [text, setText] = useState("");
  return (
    <>
      <div className="container my-3">
        <h2 className="my-1">{props.heading}</h2>

        <div class="my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            rows="6"
            id="floatingTextarea2"
          ></textarea>
        </div>
        <button
          className="btn btn-outline-dark mx-1 text-center"
          onClick={handleClearClick}
        >
          Clear
        </button>
        <h5 className="my-3">Utility Tools</h5>
        <button className="btn btn-primary mx-1" onClick={handleUpsClick}>
          Set to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLosClick}>
          Set to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleTxtExtract}>
          Extract Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleNumExtract}>
          Extract Numbers
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleReverse}>
          Reverse Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCapFirst}>
          Capital first Letter
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleSpeak}>
          Speak
        </button>
        <h5 className="my-3">Dev Tools</h5>
        <button className="btn btn-primary mx-1" onClick={minifyCss}>
          Minify CSS
        </button>
      </div>
      <div className="container my-3">
        <h3 className="text-center">Text Analysis</h3>
        <p className="text-center">
          <b>{text.split(" ").length}</b> words & <b>{text.length}</b>{" "}
          characters.
        </p>
        <p className="text-center">
        Sentence count: <b>{text.split(/[.?!]\s/).length}</b><br />
        Paragraph count: <b>{text.split(/\r\n|\r|\n/).length}</b>
        </p>
        <p className="text-center">
          Total Time to Read: <b>{0.008 * text.split(" ").length}</b> Minutes.
        </p>
        <h4 className="text-center">Preview Text:</h4>
        <p className="text-center">{text}</p>
      </div>
    </>
  );
}
