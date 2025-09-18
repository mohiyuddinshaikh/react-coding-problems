import { useEffect, useState } from "react";
import useEffectOnce from "../hooks/useEffectOnce";

function Card() {
  useEffectOnce(() => {
    console.log("here");
    return () => console.log("cleanup log");
  });

  return "Card";
}

export default function ProductDisplay() {
  const [clicked, setclicked] = useState(false);
  return (
    <div>
      ProductDisplay
      <button onClick={() => setclicked((prev) => !prev)}>Toggle card</button>
      {clicked ? <Card /> : null}
    </div>
  );
}
