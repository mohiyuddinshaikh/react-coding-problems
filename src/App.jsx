import "./App.css";
import useToggle from "./hooks/useToggle";

function App() {
  const [on, toggle] = useToggle(false);

  return (
    <div className="">
      Current state: {on}
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default App;
