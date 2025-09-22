import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [showCard, setShowCard] = useState(false);

  const toggleCard = () => {
    setShowCard((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-4">
      <button onClick={toggleCard}>Toggle card</button>
      {showCard ? <Card /> : null}
    </div>
  );
}

export default App;
