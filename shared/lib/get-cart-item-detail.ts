import { Ingredient } from "@prisma/client";
import { PizzaSize, PizzaType, mapPizzaType } from "../constants/pizza";

export const getCartItemDetail = (
  pizzaType: PizzaType,
  pizzaSize: PizzaSize,
  ingredients: Ingredient[]
): string => {
  const details = [];
  if (pizzaSize && pizzaType) {
    const typeName = mapPizzaType[pizzaType];
    details.push(`${typeName} ${pizzaSize} cm.`);
  }

  if (ingredients) {
    for (const ingredient of ingredients) {
      details.push(ingredient.name);
    }
  }

  return details.join(", ");
};
