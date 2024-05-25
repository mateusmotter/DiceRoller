import React from "react";

export default function Timer({ time }) {
  // Function to format time
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="timer">
      <p>{formatTime(time)}</p>
    </div>
  );
}
