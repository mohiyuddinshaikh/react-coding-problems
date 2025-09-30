import { useCallback, useEffect, useRef } from "react";

export default function useTimeout(callback, delay) {
  const savedCallback = useRef(callback);
  const timer = useRef(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  const clear = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  }, []);

  const start = useCallback(() => {
    clear();
    timer.current = setTimeout(() => {
      savedCallback.current();
    }, delay);
  }, [delay, clear]);

  useEffect(() => {
    start();
    return clear;
  }, [delay, start, clear]);

  return { start, clear };
}
