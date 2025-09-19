import React, { useState } from "react";

export default function useToggle(initialState = false) {
  const [on, setOn] = useState(initialState);

  const toggleOn = () => setOn((prev) => !prev);

  return [on, toggleOn];
}
