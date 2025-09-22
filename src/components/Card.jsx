import { useState } from "react";
import useUpdateEffect from "../hooks/useUpdateEffect";

export default function Card() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);

  useUpdateEffect(() => {
    console.log("increased");

    return () => {
      console.log("unmounting!");
    };
  }, [count]);

  return (
    <>
      <button onClick={increment}>Increment</button>
      Count: {count}
    </>
  );
}
