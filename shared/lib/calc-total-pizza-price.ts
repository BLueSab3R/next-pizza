import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { Ingredient, ProductItem } from "@prisma/client";

/**
 *
 * @param variations
 * @param size
 * @param type
 * @param ingredients
 * @param selectedIngredients
 * @returns
 */

export const calcTotalPizzaPrice = (
  variations: ProductItem[],
  size: PizzaSize,
  type: PizzaType,
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const pizzaPrice =
    variations.find(
      (variation) => variation.pizzaType === type && variation.size === size
    )?.price || 0;

  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  const totalPrice = pizzaPrice + totalIngredientsPrice;
  return totalPrice;
};
