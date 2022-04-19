import React from "react"
import Home from "./components/pages/Home.js"
import Aboutus from "./components/pages/Aboutus.js"
import Servises from "./components/pages/Servises.js"
import Contact from "./components/pages/Contact.js"
import Navbar from "./components/inc/Navbar.js"
import "./App.css"
import { BrowserRouter, Route, Link } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" component={Home} exact />
      <Route path="/aboutus" component={Aboutus} />
      <Route path="/servises" component={Servises} />
      <Route path="/contact" component={Contact} />
    </BrowserRouter>
  )
}

export default App
