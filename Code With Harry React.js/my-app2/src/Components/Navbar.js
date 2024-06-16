// import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Navbar.css"
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  const colors = {
    colorCode1:"blue",
    colorCode2:"red",
    colorCode3:"green",
    colorCode4:"pink",
    colorCode5:"purple",
    colorCode6:"orange",
    colorCode7:"grey",
    colorCode8:"yellow",
    colorCode9:"#e29578",
  }
  // const [themeColor , setThemeColor] = useState()
  const themeChange = () => {
      let button = document.getElementsByClassName("btn");
      console.log(button);
      for(let color in colors){
        if(button.style.backgroundColor === color){
        }
      }
  }

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link"  href="/about">
                {props.about}
              </a> */}
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}

            <button onClick={themeChange} type="button" style={{backgroundColor:colors.colorCode1}} className="mybtn btn"></button>
            <button onClick={themeChange} type="button" style={{backgroundColor:colors.colorCode2}} className="mybtn btn"></button>
            <button onClick={themeChange} type="button" style={{backgroundColor:colors.colorCode3}} className="mybtn btn"></button>
            <button onClick={themeChange} type="button" style={{backgroundColor:colors.colorCode4}} className="mybtn btn"></button>
            <button onClick={themeChange} type="button" style={{backgroundColor:colors.colorCode5}} className="mybtn btn"></button>
            <button onClick={themeChange} type="button" style={{backgroundColor:colors.colorCode6}} className="mybtn btn"></button>
            <button onClick={themeChange} type="button" style={{backgroundColor:colors.colorCode7}} className="mybtn btn"></button>
            <button onClick={themeChange} type="button" style={{backgroundColor:colors.colorCode8}} className="mybtn btn"></button>
            <button onClick={themeChange} type="button" style={{backgroundColor:colors.colorCode9}} className="mybtn btn"></button>

          <div className={`form-check form-switch text-${props.mode === "light"?"dark":"light"}`}>
            <input
              onClick={() => {props.toggleMode(); props.toggleModeText()}}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              {props.modeText} Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
// Navbar.defaultProps ={title:"Set title here", about: "Set about here"}
