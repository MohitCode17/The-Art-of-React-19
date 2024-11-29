import React from "react";
import Header from "./components/Header";
import "./App.css";
import Entry from "./components/Entry";
import data from "./data";

const App = () => {
  return (
    <>
      <Header />
      <main className="container">
        {data.map((journal) => (
          <Entry key={journal.id} journal={journal} />
        ))}
      </main>
    </>
  );
};

export default App;
