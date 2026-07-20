"use client";

import { Ingredient, ProductItem } from "@prisma/client";
import { useState } from "react";

import {
  mapPizzaType,
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes,
} from "@/shared/constants/pizza";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui";
import { useSet } from "../hooks";
import { GroupVariants, IngredientItem, PizzaImage, Title } from "./index";

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  variations: ProductItem[];
  description?: string;
  onClickAddCart?: VoidFunction;
  className?: string;
}

export const ChoosePizzaForm = ({
  imageUrl,
  name,
  ingredients,
  description,
  variations,
  onClickAddCart,
  className,
}: Props) => {
  const [size, setSize] = useState<PizzaSize>(20);
  const [type, setType] = useState<PizzaType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>()
  );
  const pizzaPrice =
    variations.find(
      (variation) => variation.pizzaType === type && variation.size === size
    )?.price || 0;
  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  const totalPrice = pizzaPrice + totalIngredientsPrice;

  const availablePizzas = variations.filter(
    (variation) => variation.pizzaType === type
  );

  const availableSizes = new Set(availablePizzas.map((item) => item.size));

  const availablePizzasSizes = pizzaSizes.map((pizza) => ({
    name: pizza.name,
    value: pizza.value,
    disabled: !availableSizes.has(Number(pizza.value)),
  }));

  const handleClickAdd = () => {
    onClickAddCart?.();
    console.log({
      size,
      type,
      ingredients: selectedIngredients,
    });
  };

  const textDetails = `${size} cm, ${mapPizzaType[type]} pizza`;

  return (
    <div className={cn(className, "flex flex-1")}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <PizzaImage size={size} imageUrl={imageUrl} />
      </div>
      <div className="bg-[#f7f6f5] w-122.5 p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400 mb-1">{textDetails}</p>
        <p className="text-gray-400">{description}</p>
        <div className="flex flex-col gap-5 mt-5">
          <GroupVariants
            items={availablePizzasSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />
          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>
        <div className="bg-gray-50 h-105 rounded-md overflow-auto scrollbar mt-5">
          <div className="grid grid-cols-3 gap-3 ">
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                name={ingredient.name}
                price={ingredient.price}
                imageUrl={ingredient.imageUrl}
                onClick={() => addIngredient(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button
          onClick={handleClickAdd}
          className="h-13.75 px-10 text-base rounded-[18px] w-full mt-10 cursor-pointer"
        >
          Add to cart for {totalPrice} $
        </Button>
      </div>
    </div>
  );
};
