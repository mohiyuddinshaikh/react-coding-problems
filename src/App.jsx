import { useState } from "react";
import "./App.css";
import usePrevious from "./hooks/usePrevious";

function App() {
  const [count, setCount] = useState(1);
  const oldCount = usePrevious(count);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col">
      <button onClick={incrementCount}>Increment count</button>
      <div>New count: {count}</div>
      <div>Old count: {oldCount.current || "undefined"}</div>
    </div>
  );
}

export default App;
