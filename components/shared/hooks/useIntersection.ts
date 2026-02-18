import { useEffect, useState, RefObject } from "react";

export const useIntersection = (ref: RefObject<HTMLElement | null>) => {
  const [intersection, setIntersection] =
    useState<IntersectionObserverEntry | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entry) => {
        const entrySec = entry[0];
        setIntersection(entrySec);
      },
      { threshold: 0.4 },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);
  return intersection;
};
