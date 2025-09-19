import { useState } from "react";
import "./App.css";
import useDebounced from "./hooks/useDebounced";

function App() {
  const [name, setName] = useState("");
  const debouncedName = useDebounced(name, 3000);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <input
        type="text"
        placeholder="Enter Name"
        onChange={handleChange}
        className="border-1 p-2"
        value={name}
      />
      <div>Name: {name}</div>
      <div>Debounced Name: {debouncedName}</div>
    </div>
  );
}

export default App;
