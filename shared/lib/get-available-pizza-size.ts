import { PizzaType, pizzaSizes } from "@/shared/constants/pizza";
import { ProductItem } from "@prisma/client";

export const getAvailablePizzaSize = (
  type: PizzaType,
  variations: ProductItem[]
) => {
  const filteredPizzasByType = variations.filter(
    (variation) => variation.pizzaType === type
  );

  const availableSizes = new Set(filteredPizzasByType.map((item) => item.size));

  const availablePizzaSizes = pizzaSizes.map((pizza) => ({
    name: pizza.name,
    value: pizza.value,
    disabled: !availableSizes.has(Number(pizza.value)),
  }));

  return { availableSizes, availablePizzaSizes };
};
