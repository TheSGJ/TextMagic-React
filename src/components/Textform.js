import React, { useState } from "react";
export default function Textform(props) {
  const handleUpsClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  // using the useState!
  const [text, setText] = useState("Enter text here!");
  return (
    <>
    <div className="container my-3">
      <h1 className="text-center">{props.heading}</h1>
      <div class="my-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          rows="8"
          id="floatingTextarea2"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpsClick}>
        Set to Uppercase
      </button>
    </div>
    <div className="container my-3">
      <h3 className="text-center">Text Analysis</h3>
      <p className="text-center"><b>{text.split(" ").length}</b> words & <b>{text.length}</b> characters.</p>
      <p className="text-center">Total Time to Read: <b>{0.008 * text.split(" ").length}</b> Minutes.</p>
      <h4 className="text-center">Preview Text:</h4>
      <p className="text-center">{text}</p>
    </div>

    </>
  );
}
