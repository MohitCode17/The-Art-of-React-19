import React from "react";
import "./App.css";
import Jokes from "./components/Jokes";
import jokesData from "./jokesData";

const App = () => {
  const jokesElements = jokesData.map((joke) => {
    return <Jokes setup={joke.setup} punchline={joke.punchline} />;
  });

  return <>{jokesElements}</>;
};

export default App;
