import { useState } from "react";

function ClickCounter() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  return (
    <div className="Counter" data-test="component-click-counter">
      <h2 data-test="counter-number">
        The count is <span data-test="count">{count}</span>
      </h2>

      {error && (
        <p style={{ color: "red" }} data-test="error">
          The counter can't go below 0!
        </p>
      )}

      <button
        data-test="counter-button"
        onClick={() => {
          setCount(count + 1);
          setError(false);
        }}
      >
        Increment
      </button>

      <button
        data-test="counter-dec-button"
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          } else {
            setError(true);
          }
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default ClickCounter;
