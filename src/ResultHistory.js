import React from "react";

function ResultHistory({ rollResults }) {
  const historyTotalList = {
    2: ["\u2680", "\u2680"],
    3: ["\u2680", "\u2681"],
    4: ["\u2681", "\u2681"],
    5: ["\u2681", "\u2682"],
    6: ["\u2682", "\u2682"],
    7: ["\u2682", "\u2683"],
    8: ["\u2683", "\u2683"],
    9: ["\u2683", "\u2684"],
    10: ["\u2684", "\u2684"],
    11: ["\u2684", "\u2685"],
    12: ["\u2685", "\u2685"],
  };

  const totalRolls = Object.values(rollResults).reduce(
    (sum, count) => sum + count,
    0
  );

  return (
    <>
      <h2>Results History</h2>
      <div className="result-history">
        <div className="result-list">
          {Object.entries(rollResults).map(([sum, count]) => (
            <div key={sum}>
              <p className="history-dices">{historyTotalList[sum]} </p>
              <p>({((count / totalRolls) * 100).toFixed(1)}%)</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ResultHistory;
