import { useCallback, useEffect, useRef, useState } from "react";

export default function useHover() {
  const elementRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverIn = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleHoverOut = useCallback(() => {
    setIsHovered(false);
  }, []);

  const ref = useCallback((node) => {
    if (elementRef.current) {
      elementRef.current?.removeEventListener("mouseover", handleHoverIn);
      elementRef.current?.removeEventListener("mouseout", handleHoverOut);
    }

    if (node) {
      node.addEventListener("mouseover", handleHoverIn);
      node.addEventListener("mouseout", handleHoverOut);
    }

    elementRef.current = node;

    return () => {
      elementRef.current?.removeEventListener("mouseover", handleHoverIn);
      elementRef.current?.removeEventListener("mouseout", handleHoverOut);
    };
  }, []);

  return [ref, isHovered];
}
