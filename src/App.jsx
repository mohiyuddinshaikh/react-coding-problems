import "./App.css";
import PhoneNumberInput from "./components/PhoneNumberInput";

function App() {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="phoneNumber">Phone Number</label>
      <PhoneNumberInput />
    </div>
  );
}

export default App;
