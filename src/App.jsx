import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <div>
      <button data-testid="decrement-button" onClick={decrement}>
        -
      </button>
      <button data-testid="increment-button" onClick={increment}>
        +
      </button>
      <p>clicked: {count}</p>
    </div>
  );
}

// run your code by clicking the run button on the right
