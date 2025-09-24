import "./App.css";
import useFocus from "./hooks/useFocus";

function App() {
  const [ref, isFocussed] = useFocus();

  return (
    <div className="flex flex-col">
      <input
        type="text"
        ref={ref}
        className="border-1 p-2"
        placeholder="Enter Name"
      />
      <div>Focus: {String(isFocussed)}</div>
    </div>
  );
}

export default App;
