import React from "react";
import "./App.css";
import ReactLogo from "./assets/react-logo.png";

const App = () => {
  return (
    <div>
      <img src={ReactLogo} alt="react-logo" width={40} />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
};

export default App;
