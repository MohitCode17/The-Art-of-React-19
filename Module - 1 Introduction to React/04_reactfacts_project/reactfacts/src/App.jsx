import React from "react";
import "./App.css";
import ReactLogo from "./assets/react-logo.png";

function ReactFacts() {
  return (
    <>
      <img src={ReactLogo} alt="react-logo" width={40} />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </>
  );
}

const App = () => {
  return <ReactFacts />;
};

export default App;
