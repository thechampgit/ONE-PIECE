import React from 'react'
import './Navbar.css'

const Navbar = ({ logo, onSwitch, onHome }) => {
  return (
    <nav className="navbar">
      <div className="nav-logo">{logo}</div>

      <ul className="nav-links">
        <li onClick={onHome} style={{ cursor: 'pointer' }}>Home</li>
        <li>Characters</li>
        <li>Episodes</li>
        <li onClick={onSwitch} style={{ cursor: 'pointer' }}>SWITCH</li>
      </ul>
    </nav>
  )
}

export default Navbar
