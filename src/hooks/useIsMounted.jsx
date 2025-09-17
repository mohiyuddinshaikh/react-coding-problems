import { useEffect, useRef } from "react";

export default function useIsMounted() {
  const mountRef = useRef(false);

  useEffect(() => {
    mountRef.current = true;
    return () => {
      mountRef.current = false;
    };
  }, []);

  return () => mountRef.current;
}
