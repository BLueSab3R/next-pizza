import { Ingredient, ProductItem } from "@prisma/client";
import { mapPizzaType, PizzaSize, PizzaType } from "../constants/pizza";
import { calcTotalPizzaPrice } from "./calc-total-pizza-price";

export const getPizzaDetails = (
  variations: ProductItem[],
  size: PizzaSize,
  type: PizzaType,
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const textDetails = `${size} cm, ${mapPizzaType[type]} pizza`.toLowerCase();
  const totalPrice = calcTotalPizzaPrice(
    variations,
    size,
    type,
    ingredients,
    selectedIngredients
  );

  return {
    textDetails,
    totalPrice,
  };
};
