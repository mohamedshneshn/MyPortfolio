import React from "react";
import "../assets/styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top px-4">
      <div className="container ">
        <Link className="navbar-brand" to="/">
          MS
        </Link>
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
              <Link className="nav-link home-link" to="/">
                Home
              </Link>
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
