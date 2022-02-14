import React from "react"
import ReactDOM  from "react-dom"
import Info from "./Info"
import About from "./About"
import Interests from "./Interests"
import Footer from "./Footer"
import '../src/app.css'


ReactDOM.render(
  <div>
    <Info />
    <About />
    <Interests />
    <Footer />
  </div>
   , document.getElementById("root")
)