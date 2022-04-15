import React, {useState} from 'react'
export default function Textform(props) {
  const handleUpsClick = () =>{
    console.log("Uppercase button was clicked. " + text)
    let newText = text.toUpperCase()
    setText(newText)
  }
  const handleupOnchange = (event) =>{
    setText(event.target.value)
    console.log("on Change.")
  }
  // using the useState!
  const [text, setText] = useState("Enter text here!");
  return (
    
    <div className="container my-3">
      <h1>{props.heading}</h1>
        <div class="my-3">
         <textarea className="form-control" value={text} onChange={handleupOnchange} rows="8" id="floatingTextarea2"></textarea>
         </div>
         <button className="btn btn-primary" onClick={handleUpsClick}>Set to Uppercase</button>
    </div>
  )
}
