import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  // console.log(import.meta.env.VITE_HF_API_KEY);
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
