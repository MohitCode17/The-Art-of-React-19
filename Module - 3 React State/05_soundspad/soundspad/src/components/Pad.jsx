import React, { useState } from "react";

const Pad = ({ color, on, toggle }) => {
  const [isPadOn, setIsPadOn] = useState(on);

  return (
    <button
      onClick={toggle}
      style={{ backgroundColor: color }}
      className={isPadOn ? "on" : undefined}
    ></button>
  );
};

export default Pad;
