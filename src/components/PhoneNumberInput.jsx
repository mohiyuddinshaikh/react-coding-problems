import { useState } from "react";

export default function PhoneNumberInput() {
  const [value, setValue] = useState("");

  const formatNumber = (input) => {
    const digits = input.replace(/\D/g, "");

    let formatted = digits;

    if (digits.length > 3) {
      formatted = `(${digits.slice(0, 3)})${digits.slice(3)}`;
    }

    if (digits.length > 6) {
      formatted = `(${digits.slice(0, 3)})${digits.slice(3, 6)}-${digits.slice(
        6
      )}`;
    }

    return formatted;
  };

  const handleChange = (e) => {
    const input = e.target.value;
    const formatted = formatNumber(input);
    setValue(formatted);
  };

  return (
    <input
      id="phoneNumber"
      type="text"
      className="border-1 border-black p-2"
      onChange={handleChange}
      value={value}
      maxLength={13}
    />
  );
}
