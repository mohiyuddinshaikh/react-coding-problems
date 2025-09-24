import { useCallback, useRef, useState } from "react";

export default function useFocus() {
  const elementRef = useRef(null);
  const [isFocussed, setIsFocussed] = useState(false);

  const handleFocus = () => setIsFocussed(true);
  const handleBlur = () => setIsFocussed(false);

  const callbackRef = useCallback((node) => {
    if (elementRef.current) {
      elementRef.current.removeEventListener("focus", handleFocus);
      elementRef.current.removeEventListener("blur", handleBlur);
    }

    if (node) {
      node.addEventListener("focus", handleFocus);
      node.addEventListener("blur", handleBlur);
    }

    elementRef.current = node;
  }, []);

  return [callbackRef, isFocussed];
}
