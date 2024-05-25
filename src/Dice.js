import React from "react";

function Dice({ value }) {
  const unicodeSymbols = {
    1: "\u2680",
    2: "\u2681",
    3: "\u2682",
    4: "\u2683",
    5: "\u2684",
    6: "\u2685",
  };

  return (
    <div className="die">
      <p className="die-face">{unicodeSymbols[value]}</p>
    </div>
  );
}

export default Dice;
