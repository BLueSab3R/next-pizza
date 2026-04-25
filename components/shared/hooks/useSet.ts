import { useState, useCallback } from "react";

export const useSet = <T>(initialSet = new Set<T>()) => {
  const [set, setSet] = useState<Set<T>>(initialSet);
  const has = useCallback(
    (item: T) => {
      return set.has(item);
    },
    [set],
  );
  const add = useCallback((item: T) => {
    setSet((prevSet) => {
      const newSet = new Set(prevSet);
      newSet.add(item);
      return newSet;
    });
  }, []);
  const remove = useCallback((item: T) => {
    setSet((prevSet) => {
      const newSet = new Set(prevSet);
      newSet.delete(item);
      return newSet;
    });
  }, []);

  const toggle = useCallback((item: T) => {
    setSet((prevSet) => {
      const newSet = new Set(prevSet);

      if (newSet.has(item)) {
        newSet.delete(item);
      } else {
        newSet.add(item);
      }
      return newSet;
    });
  }, []);
  return [set, { add, remove, toggle, has }] as const;
};
