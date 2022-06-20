import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

const logo = require("../logo.png");

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo-image" src={logo} alt="Surreal Estate Logo" />
      </Link>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/view-properties">View Properties</Link>
        </li>
        <li className="navbar-item">
          <Link to="/add-properties">Add a Property</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
