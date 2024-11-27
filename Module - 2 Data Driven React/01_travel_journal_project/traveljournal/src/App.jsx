import React from "react";
import Header from "./components/Header";
import "./App.css";
import Entry from "./components/Entry";

const App = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Entry />
        <Entry />
        <Entry />
      </main>
    </>
  );
};

export default App;
