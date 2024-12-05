import React from "react";

const Pad = ({ color, on }) => {
  return <button style={{ backgroundColor: color }} className={on ? "on" : undefined}></button>;
};

export default Pad;
