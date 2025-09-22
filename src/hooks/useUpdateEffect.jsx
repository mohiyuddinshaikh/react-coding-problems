import React, { useEffect, useRef } from "react";

export default function useUpdateEffect(effect, dependencyArray) {
  const isFirstRender = useRef(true);
  const cb = useRef(null);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    cb.current = effect();

    return () => {
      if (cb.current) {
        cb.current();
      }
    };
  }, [...dependencyArray]);
}
