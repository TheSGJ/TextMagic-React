import React, { useState } from "react";
export default function Textform(props) {
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared all Texts!", "success");
    handleUpScroll();
  };

  const handleUpsClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
    handleUpScroll();
  };

  const handleLosClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
    handleUpScroll();
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
    props.showAlert("Minified the CSS!", "success");
    handleUpScroll();
  };

  // Caps first letter of Word:
  const handleCapsWord = () => {
    const arr = text.split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const updatedText = arr.join(" ");
    setText(updatedText);
    props.showAlert("Capitalized Each Word!", "success");
    handleUpScroll();
  };

  // Generate a random quote:

  //to capitalise first text of the sentence
  const handleCapFirst = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
    props.showAlert(
      "Capitalized the first word of the first sentence!",
      "success"
    );
    handleUpScroll();
  };
  //remove all the symbols
  const handleTxtExtract = () => {
    const regex = /[0-9/A-Z/a-z/ /]/g;

    const letters = text.match(regex);
    const res1 = letters.join("");
    setText(res1);
    props.showAlert("Extracted the text!", "success");
    handleUpScroll();
  };

  //to extract only the numbers in the text:
  const handleNumExtract = () => {
    const regex = /[0-9/ /]/g;
    const digits = text.match(regex);
    const res = digits.join("");
    setText(res);
    props.showAlert("Extracted the Numbers!", "success");
    handleUpScroll();
  };

  const handleReverse = () => {
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
    props.showAlert("Reversed the Text!", "success");
    handleUpScroll();
  };
  // function to use Text to speech:
  const handleSpeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Text to Speech Enabled!", "success");
    handleUpScroll();
  };
  // Copy to clipboard:
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
    handleUpScroll();
  };
  const handleUpScroll = () => {
    window.scrollTo(0, 0);
  };
  const minifyHtml = () => {
    let html = text
      .replace(/([^0-9a-zA-Z.#])\s+/g, "$1")
      .replace(/\s([^0-9a-zA-Z.#]+)/g, "$1")
      .replace(/;}/g, "}");
    setText(html);
    props.showAlert("Minified the HTML!", "success");
    handleUpScroll();
  };
  // using the useState!
  const [text, setText] = useState("");
  return (
    <>
      <div className="container my-3">
        <h2 className="my-1">{props.heading}</h2>

        <div className="my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            rows="6"
            id="TextformInput"
          ></textarea>
        </div>
        <button
          className="btn btn-outline-danger mx-1 text-center"
          onClick={handleClearClick} disabled={text.length === 0}
        >
          Clear
        </button>
        <button
          className="btn btn-outline-info mx-1 text-center"
          onClick={handleSpeak} disabled={text.length === 0}
        >
          🔊
        </button>
        <button
          className="btn btn-outline-primary mx-1 text-center"
          onClick={handleCopy}
          disabled={text.length === 0}
        >
          Copy to Clipboard
        </button>
        <h5 className="my-3">Utility Tools</h5>
        <button className="btn btn-primary mx-1" onClick={handleUpsClick} disabled={text.length === 0}>
          Set to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLosClick} disabled={text.length === 0}>
          Set to Lowercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleTxtExtract} disabled={text.length === 0}
        >
          Extract Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleNumExtract} disabled={text.length === 0}
        >
          Extract Numbers
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleReverse} disabled={text.length === 0}>
          Reverse Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCapFirst} disabled={text.length === 0}>
          Capital first Letter
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCapsWord} disabled={text.length === 0}>
          Caps first letter of Words
        </button>

        <h5 className="my-3">Dev Tools</h5>
        <button className="btn btn-primary mx-1" onClick={minifyCss} disabled={text.length === 0}>
          Minify CSS
        </button>
        <button className="btn btn-primary mx-1" onClick={minifyHtml} disabled={text.length === 0}>
          Minify HTML
        </button>
      </div>
      <div className="container my-3">
        <h3 className="text-center">Text Analysis</h3>
        <p className="text-center">
          <b>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
          </b>{" "}
          words & <b>{text.length}</b> characters.
        </p>
        <p className="text-center">
          Total Time to Read:{" "}
          <b>
            {0.008 *
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length}
          </b>{" "}
          Minutes.
        </p>
        <h4 className="text-center">Preview Text:</h4>
        <p className="text-center">
          {text.length > 0 ? text : "Nothing to preview!"}
        </p>
      </div>
    </>
  );
}
