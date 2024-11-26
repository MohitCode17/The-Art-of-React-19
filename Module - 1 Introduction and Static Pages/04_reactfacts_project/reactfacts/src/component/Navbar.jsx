import React from "react";
import reactLogo from "../assets/react-logo.png";

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={reactLogo} alt="react-logo" />
        <span>ReactFacts</span>
      </nav>
    </header>
  );
};

export default Navbar;
