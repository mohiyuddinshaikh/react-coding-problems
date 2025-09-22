import { useState } from "react";
import useIsFirstRender from "../hooks/useIsFirstRender";

export default function Card() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);

  const isFirstRender = useIsFirstRender();
  console.log("isFirstRender.current", isFirstRender.current);
  return (
    <>
      <button onClick={increment}>Increment count</button>
      <div>Count: {count}</div>
    </>
  );
}
