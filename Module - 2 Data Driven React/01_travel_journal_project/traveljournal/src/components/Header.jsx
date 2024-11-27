import React from "react";
import globe from "../assets/globe.png";

const Header = () => {
  return (
    <header>
      <nav>
        <img src={globe} alt="globe" />
        <span>my travel journal.</span>
      </nav>
    </header>
  );
};

export default Header;
