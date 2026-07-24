import { PizzaSize, PizzaType, pizzaTypes } from "@/shared/constants/pizza";
import { ProductItem } from "@prisma/client";
import { useEffect, useState } from "react";
import { getAvailablePizzaSize, getAvailablePizzaType } from ".";
import { useSet } from "../hooks";

interface ReturnProps {
  size: PizzaSize;
  type: PizzaType;
  setSize: (size: PizzaSize) => void;
  setType: (type: PizzaType) => void;
  availablePizzaSizes: { name: string; value: string; disabled: boolean }[];
  availablePizzaTypes: { name: string; value: string; disabled: boolean }[];
  selectedIngredients: Set<number>;
  addIngredient: (id: number) => void;
}

export const usePizzaOptions = (variations: ProductItem[]): ReturnProps => {
  const [size, setSize] = useState<PizzaSize>(20);
  const [type, setType] = useState<PizzaType>(1);

  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>()
  );

  const { availableSizes, availablePizzaSizes } = getAvailablePizzaSize(
    type,
    variations
  );

  const { availableTypes, availablePizzaTypes } = getAvailablePizzaType(
    pizzaTypes,
    variations
  );

  useEffect(() => {
    const isCurrentSizeAvailable = availableSizes.has(size);

    if (!isCurrentSizeAvailable) {
      const availableSize = availablePizzaSizes.find(
        (pizza) => !pizza.disabled
      );
      if (availableSize) {
        setSize(Number(availableSize.value) as PizzaSize);
      }
    }
  }, [size]);

  useEffect(() => {
    const isCurrentTypeAvailable = availableTypes.has(type);

    if (!isCurrentTypeAvailable) {
      const availableType = availablePizzaTypes.find(
        (pizza) => !pizza.disabled
      );
      if (availableType) {
        setType(Number(availableType.value) as PizzaType);
      }
    }
  }, [type]);

  return {
    size,
    type,
    setSize,
    setType,
    availablePizzaSizes,
    availablePizzaTypes,
    selectedIngredients,
    addIngredient,
  };
};
