import "./App.css";
import useHover from "./hooks/useHover";

function App() {
  const [ref, isHovered] = useHover();
  return (
    <div className="">
      <div
        ref={ref}
        className=" h-36 w-36 bg-amber-200 flex justify-center items-center"
      >
        This is a div
      </div>
      <div>Hovered: {String(isHovered)}</div>
    </div>
  );
}

export default App;
