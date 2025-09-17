import { useState } from "react";
import BikeCard from "./BikeCard";

export default function ProductDisplay() {
  const [showCard, setShowCard] = useState(false);

  const toggleCard = () => {
    setShowCard((prev) => !prev);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      ProductDisplay
      <button onClick={toggleCard}>Toggle card</button>
      {showCard ? <BikeCard /> : null}
    </div>
  );
}
