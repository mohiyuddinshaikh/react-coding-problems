import { useEffect, useState } from "react";

export default function useDebounced(value, timeout = 3000) {
  const [debounceValue, setDebounceValue] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, timeout);
    return () => clearTimeout(timer);
  }, [value]);

  return debounceValue;
}
