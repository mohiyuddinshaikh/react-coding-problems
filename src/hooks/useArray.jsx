import { useState, useCallback } from "react";

export default function useArray(initialValue) {
  const [thisArray, setThisArray] = useState([...initialValue]);

  const push = useCallback((...args) => {
    setThisArray((prev) => [...prev, ...args]);
  }, []);

  const removeByIndex = useCallback((index) => {
    setThisArray((prev) => {
      const copy = [...prev];
      copy.splice(index, 1);
      return copy;
    });
  }, []);

  return {
    value: thisArray,
    push,
    removeByIndex,
  };
}
