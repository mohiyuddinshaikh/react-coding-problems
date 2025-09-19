import React, { useEffect, useRef, useState } from "react";

export default function usePrevious(value) {
  const previousValueRef = useRef(undefined);

  useEffect(() => {
    previousValueRef.current = value;
  }, [value]);

  return previousValueRef;
}
