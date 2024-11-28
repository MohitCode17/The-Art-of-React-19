import React from "react";

const Jokes = ({ setup, punchline }) => {
  return (
    <>
      {setup && <p className="setup">Setup: {setup}</p>}
      <p className="punchline">Puncline: {punchline}</p>
      <hr />
    </>
  );
};

export default Jokes;
