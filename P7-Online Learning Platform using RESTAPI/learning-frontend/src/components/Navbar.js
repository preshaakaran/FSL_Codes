import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Learning Platform</h1>
      <div className="nav-links">
        <Link to="/">Courses</Link>
        <Link to="/add">Add Course</Link>
      </div>
    </nav>
  );
}

export default Navbar;