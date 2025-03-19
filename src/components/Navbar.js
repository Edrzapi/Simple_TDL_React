// components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">To Do List App</Link>
      </div>

      {/* Burger Icon */}
      <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>

      {/* Menu Items */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" className="navbar-link" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" className="navbar-link" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/todos" className="navbar-link" onClick={() => setMenuOpen(false)}>Todos</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
