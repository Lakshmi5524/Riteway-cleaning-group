import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./navbar.css"
import logo from "../images/logo.png"
function Navbar() {
  const [isopen, setOpen] = useState(false)
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} className="nav-logo" />
      </Link>
      <div className={`nav-item ${isopen && "open"}`}>
        <a href="/">Home</a>
        <a href="/aboutus">Aboutus</a>
        <a href="/servises">Service</a>
        <a href="/contact">Contact</a>
      </div>
      <div className={`nav-toggle ${isopen && "open"}`}>
        <div className="bar"></div>
      </div>
    </div>
  )
}

export default Navbar
