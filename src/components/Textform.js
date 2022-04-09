import React from 'react'

export default function Textform() {
  return (
    <div className="container">
        <div className="form-floating">
         <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 100}}></textarea>
         <label for="floatingTextarea2">Comments</label>
         </div>
    </div>
  )
}
