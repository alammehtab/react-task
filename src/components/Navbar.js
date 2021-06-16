import React from "react";
import logo from "../images/logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <navbar className="nav-container container">
      <img src={logo} alt="logo" className="logo" />
      <a href="https:" className="toggle-button">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <ul className="un-list">
        <li>Projects</li>
        <li>Vendors</li>
        <li>Services</li>
        <li>|</li>
        <li>
          <button className="btn btn-primary btn-sm">Signup</button>
        </li>
      </ul>
    </navbar>
  );
}
