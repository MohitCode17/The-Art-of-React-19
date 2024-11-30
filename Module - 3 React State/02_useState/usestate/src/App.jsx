import React, { useState } from "react";
import "./App.css";

const App = () => {
  let [result, setResult] = useState("Yes");

  return (
    <main>
      <h1 className="title">Is state important to know?</h1>
      <button className="value">{result}</button>
    </main>
  );
};

export default App;
