import { useState } from "react";
import "./App.css";
import useTimeout from "./hooks/useTimeout";

function App() {
  const [delay, setDelay] = useState(3000);

  const { start } = useTimeout(() => {
    console.log(`Log after ${delay}`);
  }, delay);

  const printLog = () => {
    start();
  };

  return (
    <div className="flex flex-col gap-2">
      <div>
        <button onClick={printLog}>Print Log</button>
        <button
          onClick={() => {
            setDelay((prev) => prev + 2000);
          }}
        >
          Increment Delay
        </button>
      </div>
    </div>
  );
}

export default App;
