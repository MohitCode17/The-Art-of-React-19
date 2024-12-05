import { useState } from "react";
import "./App.css";
import Count from "./Components/Count";

function App() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const minus = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <main className="container">
      <h1>How many times will Bob say "state" in this section?</h1>
      <div className="counter">
        <button onClick={minus} className="minus" aria-label="Decrease count">
          –
        </button>
        <Count number={count} />
        <button onClick={add} className="plus" aria-label="Increase count">
          +
        </button>
      </div>
    </main>
  );
}

export default App;
