import { Ingredient } from "@prisma/client";
import { mapPizzaType, PizzaSize, PizzaType } from "../../constants/pizza";

interface Props {
  name: string;
  pizzaSize?: PizzaSize;
  type?: PizzaType;
  ingredients?: Ingredient[];
}

export const CartItemInfo = ({ name, pizzaSize, type, ingredients }: Props) => {
  const details = [];
  if (pizzaSize && type) {
    const typeName = mapPizzaType[type];
    details.push(`${typeName} ${pizzaSize} cm.`);
  }

  if (ingredients) {
    for (const ingredient of ingredients) {
      details.push(ingredient.name);
    }
  }
  console.log(details);
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold flex-1 leading-6">{name}</h2>
      </div>
      {details.length > 0 && (
        <p className="text-xs text-gray-400">{details.join(", ")}</p>
      )}
    </div>
  );
};
