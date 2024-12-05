import React, { useState } from "react";
import padsData from "./pad";
import "./App.css";

const App = () => {
  const [pads, setPads] = useState(padsData);

  const buttonElements = pads.map((pad) => <button key={pad.id}></button>);

  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
    </main>
  );
};

export default App;
