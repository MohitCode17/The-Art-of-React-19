import React from "react";
import chefClaudeLogo from "../assets/chef-claude-icon.png";

const Header = () => {
  return (
    <header>
      <nav>
        <img src={chefClaudeLogo} alt="check-claude" />
        <span>Chef Claude</span>
      </nav>
    </header>
  );
};

export default Header;
