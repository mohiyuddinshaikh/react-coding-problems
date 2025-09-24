import "./App.css";
import useArray from "./hooks/useArray";

function App() {
  const numbers = [1, 2, 3];
  const { value, push, removeByIndex } = useArray(numbers);

  console.log("value", value);

  const handlePush = () => {
    push(4);
  };

  const handleRemove = () => {
    removeByIndex(1);
  };

  return (
    <div className="">
      Solution goes here
      <button onClick={handlePush}>Push item in array</button>
      <button onClick={handleRemove}>Remove item in array</button>
    </div>
  );
}

export default App;
