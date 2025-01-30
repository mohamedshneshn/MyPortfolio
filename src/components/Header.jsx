import React from "react";
import "../assets/styles/Header.css";

const Header = (props) => {
  return (
    <div className="main-header text-center">
      <span className="icon">{props.icon}</span>
      <h2 className="main-title fw-bold text-primary">{props.title}</h2>
    </div>
  );
};

export default Header;
