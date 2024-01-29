import React, { useState } from 'react'

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("Uppercase can be enabled!","success");
  }
  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("Lowrercase can be enabled!","success");

  }

 

  return (
    <>
    
      <div className="container" style={{color:props.mode === "dark"?"white":"black"}}>
        <h1>{props.heading} </h1>
        <div className="mb-3" >
          <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" column="5" style={{backgroundColor: props.mode === "dark"?"grey":"white",color:props.mode === "dark"?"white":"black"}}></textarea>
        </div>
        <button className="btn  mx-2" onClick={handleUpClick} style={{backgroundColor: props.mode === "dark"?"black":"grey",color:props.mode === "dark"?"white":"black"}} >Convert Text into Uppercase</button>
        <button className="btn  mx-2" onClick={handleLoClick} style={{backgroundColor: props.mode === "dark"?"black":"grey",color:props.mode === "dark"?"white":"black"}}>Convert Text into Lowercase</button>

      </div>
      <div className="containers" style={{color:props.mode === "dark"?"white":"black"}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.08 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    
    </>
  );
}
