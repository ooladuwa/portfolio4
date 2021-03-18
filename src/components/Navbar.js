import React from 'react'
import { Link } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/about">About</Link>
      <Link className="link" to="projects">Projects</Link>
    </nav>
  )
}

export default Navbar
