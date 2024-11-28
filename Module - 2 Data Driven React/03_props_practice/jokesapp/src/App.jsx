import React from "react";
import "./App.css";
import Jokes from "./components/Jokes";

const App = () => {
  return (
    <>
      <Jokes
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
      />
      <Jokes
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
      />
      <Jokes
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy"
      />
      <Jokes
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm"
      />
      <Jokes
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
      />
    </>
  );
};

export default App;
