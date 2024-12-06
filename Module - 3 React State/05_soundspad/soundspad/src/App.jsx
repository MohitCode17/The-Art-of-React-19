import React, { useState } from "react";
import padsData from "./pad";
import "./App.css";
import Pad from "./components/Pad";

const App = () => {
  const [pads, setPads] = useState(padsData);

  const toggle = (id) => {
    setPads((prevPads) =>
      prevPads.map((item) => {
        return item.id === id ? { ...item, on: !item.on } : item;
      })
    );
  };

  const buttonElements = pads.map((pad) => (
    <Pad
      key={pad.id}
      id={pad.id}
      color={pad.color}
      on={pad.on}
      toggle={toggle}
    />
  ));

  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
    </main>
  );
};

export default App;
