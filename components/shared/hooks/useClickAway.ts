import { RefObject, useEffect } from "react";

export const useClickAway = <T extends HTMLElement>(
  ref: RefObject<T>,
  handler: () => void,
) => {
  useEffect(() => {
    const element = ref?.current;
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!element || element.contains(event?.target as Node)) return;
      handler();
    };
    document.addEventListener("touchstart", listener);
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("touchstart", listener);
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};
