import React, { useState } from "react";
import "./App.css";

const App = () => {
  let result = useState("Yes");
  console.log(result);

  return (
    <main>
      <h1 className="title">Is state important to know?</h1>
      <button className="value">{result[0]}</button>
    </main>
  );
};

export default App;
