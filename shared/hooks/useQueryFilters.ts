import { useRouter } from "next/navigation";
import qs from "qs";
import { useEffect, useRef } from "react";
import { Filters } from "./useFilters";

export const useQueryFilters = (filters: Filters) => {
  const router = useRouter();
  const isMounted = useRef(false);
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    const params = {
      ...filters.prices,
      pizzaTypes: Array.from(filters.pizzaTypes),
      sizes: Array.from(filters.selectedSizes),
      ingredients: Array.from(filters.selectedIngredients),
    };
    const query = qs.stringify(params, {
      arrayFormat: "comma",
    });
    const currentHash =
      typeof window !== "undefined" ? window.location.hash : "";
    router.push(`?${query}${currentHash}`, { scroll: false });
  }, [
    filters.prices,
    filters.pizzaTypes,
    filters.selectedSizes,
    filters.selectedIngredients,
    router,
  ]);
};
