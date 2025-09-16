import { useRef } from "react";
import "./App.css";
import { useOutsideClicked } from "./hooks/useOutsideClicked";

function App() {
  const elementRef = useRef(null);

  const handleOutsideClicked = () => {
    console.log("Clicked outside!");
  };

  useOutsideClicked(elementRef, handleOutsideClicked);

  return (
    <div>
      <div
        ref={elementRef}
        style={{
          width: "200px",
          height: "200px",
          background: "lightblue",
        }}
      >
        This is an element
      </div>
    </div>
  );
}

export default App;
