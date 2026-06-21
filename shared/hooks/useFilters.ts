import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useSet } from "./useSet";

interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

export interface QueryFilters extends PriceProps {
  pizzaTypes: string;
  sizes: string;
  ingredients: string;
}

export interface Filters {
  selectedSizes: Set<string>;
  pizzaTypes: Set<string>;
  selectedIngredients: Set<string>;
  prices: PriceProps;
}

interface ReturnProps extends Filters {
  setPrices: (name: keyof PriceProps, value: number) => void;
  setPizzaTypes: (value: string) => void;
  setSizes: (value: string) => void;
  setIngredients: (value: string) => void;
  removeIngredients: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;
  const [
    selectedIngredients,
    { toggle: toggleIngredients, remove: removeIngredients },
  ] = useSet(
    new Set<string>(
      searchParams.get("ingredients")
        ? searchParams.get("ingredients")?.split(",")
        : [],
    ),
  );
  const [prices, setPrices] = useState<PriceProps>({
    priceFrom: searchParams.get("priceFrom")
      ? Number(searchParams.get("priceFrom"))
      : 0,
    priceTo: searchParams.get("priceTo")
      ? Number(searchParams.get("priceTo"))
      : 500,
  });
  const [selectedSizes, { toggle: toggleSize }] = useSet(
    new Set<string>(
      searchParams.get("sizes") ? searchParams.get("sizes")?.split(",") : [],
    ),
  );
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>(
      searchParams.get("pizzaTypes")
        ? searchParams.get("pizzaTypes")?.split(",")
        : [],
    ),
  );
  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrices((prev) => ({ ...prev, [name]: value }));
  };

  return {
    prices,
    pizzaTypes,
    selectedSizes,
    selectedIngredients,
    setPrices: updatePrice,
    setPizzaTypes: togglePizzaTypes,
    setSizes: toggleSize,
    setIngredients: toggleIngredients,
    removeIngredients: removeIngredients,
  };
};
