import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add styles for the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MyApp</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
