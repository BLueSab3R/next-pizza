import { PizzaSize, PizzaType, mapPizzaType } from "../constants/pizza";
import { CartStateItem } from "../store/cart";

export const getCartItemDetail = (
  pizzaType: PizzaType,
  pizzaSize: PizzaSize,
  ingredients?: CartStateItem["ingredients"]
): string => {
  const details = [];
  if (pizzaSize && pizzaType) {
    const typeName = mapPizzaType[pizzaType];
    details.push(`${typeName}, ${pizzaSize} cm`);
  }

  if (ingredients) {
    for (const ingredient of ingredients) {
      details.push(ingredient.name);
    }
  }

  return details.join(", ");
};
