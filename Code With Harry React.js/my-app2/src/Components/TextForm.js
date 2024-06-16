import React, { useState } from "react";
import "./TextForm.css"

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    if(newText.length>0){
      props.showAlert("Converted to uppercase!", "success");
      }else{
        props.showAlert("Please enter some text", "info")
      }
  };
  const handlelowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    if(newText.length>0){
      props.showAlert("Converted to lowercase!", "success");
      }else{
        props.showAlert("Please enter some text", "info")
      }
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    if(newText.length>0){
      props.showAlert("Text Removed!", "success");
      }else{
        props.showAlert("Please enter some text", "info")
      }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    let text = document.getElementById("my-Box");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value)
    if(text.innerHTML === ""){
    
      props.showAlert("Please enter some text", "info")
      }else{
        props.showAlert("Text copied!", "success");  
      }
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    console.log(newText.length);
    setText(newText.join(" "))
    if(newText.length>1){
    props.showAlert("Extra Space Removed!", "success");
    }else{
      props.showAlert("Please enter some text", "info")
    }
  }
  return (
    <>
      <div className="textForm container">
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            style={{backgroundColor:props.mode === "light"?"white":"grey", color: props.mode === "light"?"black":"white"}}
            value={text}
            onChange={handleOnChange}
            placeholder="Enter Text Here....."
            className="form-control"
            id="my-Box"
            rows="10"
          ></textarea>
        </div>

        <button
          style={{color: props.mode === "light"?"black":"white"}}
          className="btn"
          onClick={handleUpClick}
        >
          Convert To Uppercase
        </button>
        <button
          style={{color: props.mode === "light"?"black":"white"}}
          className="btn"
          onClick={handlelowerClick}
        >
          Convert To Lowercase
        </button>

        <button
          style={{color: props.mode === "light"?"black":"white"}}
          className="btn"
          onClick={handleClearClick}
        >
          Clear Text
        </button>

        <button
          style={{color: props.mode === "light"?"black":"white"}}
          
          className="btn"
          onClick={handleCopy}
        >
          Copy Text
        </button>

        <button
          style={{color: props.mode === "light"?"black":"white"}}
          
          className="btn"
          onClick={handleExtraSpaces}
        >
          Remove Extra Space
        </button>
      </div>

      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} Words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes To Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Some Text Above To Preview"}</p>
      </div>

      
    </>
  );
}
