import React, { useState } from "react";

const Pad = ({ color, on, toggle, id }) => {
  return (
    <button
      onClick={() => toggle(id)}
      style={{ backgroundColor: color }}
      className={on ? "on" : undefined}
    ></button>
  );
};

export default Pad;
