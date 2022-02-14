import React from "react"
import ReactDOM  from "react-dom"
import Info from "./Info"
import About from "./About"
import Interests from "./Interests"
import '../src/app.css';


ReactDOM.render(
  <div>
    <Info />
    <About />
    <Interests />
  </div>
   , document.getElementById("root")
)