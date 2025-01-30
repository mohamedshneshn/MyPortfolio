import React from "react";
import "../assets/styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom p-3">
      <div className="container ">
        <a className="navbar-brand" href="#hero">
          MS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item pe-3">
              <a className="nav-link" href="#hero">
                Home
              </a>
            </li>
            <li className="nav-item pe-3">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item pe-3 ">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item pe-3 ">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item pe-3 ">
              <a className="nav-link" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
