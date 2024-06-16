import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";
import { useState } from "react";
import Alert from "./Components/Alert";

import React from "react";
import {
  // BrowserRouter as Router,
  // Routes,
  // Route,
} from "react-router-dom";


function App() {

  // setInterval(() => {
  //   document.title = "TextUtils is Amazing";
  // }, 3000);
  // setInterval(() => {
  //   document.title = "Intall TextUtils Now";
  // }, 2000);
  
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
      showAlert("Dark mode has been enabled!", "success")
      document.title = "TextUtils - Dark Mode";
    }else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black";
      showAlert("Light mode has been enabled!", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  const [modeText, setModeText] = useState("Enable");
  const toggleModeText = () => {
    if(modeText === "Enable"){
      setModeText("Disable")
    }else{
      setModeText("Enable")
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 2500);
  }

  return (
    
    // <Router>
    <>
      <Navbar title="TextUtils" about="About" modeText={modeText} mode={mode} toggleMode={toggleMode} toggleModeText={toggleModeText}/>
      <Alert alert={alert} />
      <div className="container my-3">

      {/* <Routes> */}

          {/* <Route exact path="/about"  element={<About />}>
            
          </Route> */}

          {/* <Route exact */}
           {/* path="/" element={<TextForm showAlert={showAlert} heading="Enter your text here to analyze" mode={mode} />}> */}
            <TextForm showAlert={showAlert} heading="Enter your text here to analyze" mode={mode} />
          {/* </Route> */}

        {/* </Routes> */}

      </div>
    </>
    // </Router>

    
  );
}

export default App;
