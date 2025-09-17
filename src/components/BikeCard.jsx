import { useEffect, useRef } from "react";
import useIsMounted from "../hooks/useIsMounted";

export default function BikeCard() {
  const isMounted = useIsMounted();

  useEffect(() => {
    setTimeout(() => {
      console.log("isMounted", isMounted());
    }, 3000);
  }, []);

  return <div>BikeCard</div>;
}
