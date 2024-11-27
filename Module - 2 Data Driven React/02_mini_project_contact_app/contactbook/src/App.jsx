import React from "react";
import "./App.css";
import whiskerson from "./assets/mr-whiskerson.png";
import fluffykins from "./assets/fluffykins.png";
import felix from "./assets/felix.png";
import pumpkin from "./assets/pumpkin.png";
import phone from "./assets/phone-icon.png";
import mail from "./assets/mail-icon.png";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="contacts">
      <Contact />
      <Contact />
      <Contact />
      <Contact />
    </div>
  );
};

export default App;
