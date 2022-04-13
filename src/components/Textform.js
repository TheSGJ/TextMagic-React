import React, {useState} from 'react'
const [count, set] = useState("Enter text here!");
export default function Textform(props) {
  return (
    
    <div className="container my-3">
      <h1>{props.heading}</h1>
        <div>
         <textarea className="form-control" rows="8" id="floatingTextarea2"></textarea>
         </div>
    </div>
  )
}
