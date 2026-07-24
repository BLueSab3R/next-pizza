import { ProductItem } from "@prisma/client";

interface PizzaTypeOption {
  name: "Traditional" | "Thin";
  value: string;
}
export const getAvailablePizzaType = (
  pizzaTypes: PizzaTypeOption[],
  variations: ProductItem[]
) => {
  const availableTypes = new Set(variations.map((item) => item.pizzaType));
  const availablePizzaTypes = pizzaTypes.map((type) => ({
    name: type.name,
    value: type.value,
    disabled: !availableTypes.has(Number(type.value)),
  }));

  return { availableTypes, availablePizzaTypes };
};
