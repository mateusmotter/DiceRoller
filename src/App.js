import React, { useState, useEffect, useRef } from "react";
import Dice from "./Dice";
import ResultHistory from "./ResultHistory";
import Timer from "./Timer";
import "./index.css";

function App() {
  const [dice1, setDice1] = useState(null);
  const [dice2, setDice2] = useState(null);
  const [rollResults, setRollResults] = useState({}); // Track roll sums
  const [time, setTime] = useState(null); // Start with timer not running
  const [timeUp, setTimeUp] = useState(false); // Track if time has run out
  const timerRef = useRef(null); // Reference to the timer interval

  const message = "NO TIME LEFT";

  useEffect(() => {
    if (timeUp) return;

    // Only update timer if it's active
    if (time !== null) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(timerRef.current); // Stop timer
            setTimeUp(true);
            return 0;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(timerRef.current);
  }, [time, timeUp]);

  const rollDice = () => {
    // Step 1: Compute new dice results
    const newDice1 = Math.floor(Math.random() * 6) + 1;
    const newDice2 = Math.floor(Math.random() * 6) + 1;
    const newRollSum = newDice1 + newDice2;

    // Step 2: Update the dice states
    setDice1(newDice1);
    setDice2(newDice2);

    // Step 3: Update the roll results
    setRollResults((prevResults) => {
      // Check if the roll sum already exists, and increment its count
      const updatedResults = {
        ...prevResults,
        [newRollSum]: (prevResults[newRollSum] || 0) + 1,
      };

      // Return the updated roll results
      return updatedResults;
    });

    // Set any additional state or perform actions as needed
    setTime(120);
    setTimeUp(false);
  };

  return (
    <>
      <div className="container">
        <h1>Dice Roller</h1>
        {time !== null && time > 0 ? <Timer time={time} /> : ""}

        {time < 20 && time > 0 ? (
          <h2 style={{ color: "red" }}>HURRY UP</h2>
        ) : timeUp ? (
          <h2 style={{ color: "red" }}>{message}</h2>
        ) : (
          ""
        )}

        <button className="btn btn-primary btn-lg mt-3" onClick={rollDice}>
          Roll Dice
        </button>
        <div className="dice-container">
          <Dice value={dice1} />
          <Dice value={dice2} />
        </div>
      </div>
      <div className="container">
        <ResultHistory rollResults={rollResults} />
      </div>
    </>
  );
}

export default App;
