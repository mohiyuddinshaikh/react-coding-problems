import { useEffect } from "react";

export default function useEffectOnce(callback) {
  useEffect(() => {
    const res = callback();

    return () => {
      if (res) {
        res();
      }
    };
  }, []);
}
