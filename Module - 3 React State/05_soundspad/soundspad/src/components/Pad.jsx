import React, { useState } from "react";

const Pad = ({ color, on }) => {
  const [isPadOn, setIsPadOn] = useState(on);

  const toggleOnOff = () => {
    setIsPadOn((prevPadOn) => !prevPadOn);
  };

  return (
    <button
      onClick={toggleOnOff}
      style={{ backgroundColor: color }}
      className={isPadOn ? "on" : undefined}
    ></button>
  );
};

export default Pad;
