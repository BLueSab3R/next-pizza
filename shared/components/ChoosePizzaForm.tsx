"use client";

import {
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes,
} from "@/shared/constants/pizza";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui";
import { Ingredient } from "@prisma/client";
import { useState } from "react";
import { GroupVariants, IngredientItem, PizzaImage, Title } from "./index";

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items?: [];
  description?: string;
  onClickAdd?: VoidFunction;
  className: string;
}

export const ChoosePizzaForm = ({
  imageUrl,
  name,
  ingredients,
  description,
  items,
  onClickAdd,
  className,
}: Props) => {
  const [size, setSize] = useState<PizzaSize>(20);
  const [type, setType] = useState<PizzaType>(1);
  const totalPrice = 120;
  return (
    <div className={cn(className, "flex flex-1")}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <PizzaImage size={size} imageUrl={imageUrl} />
      </div>
      <div className="bg-[#f7f6f5] w-122.5 p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{description}</p>
        <div className="flex flex-col gap-5 mt-5">
          <GroupVariants
            items={pizzaSizes}
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
                onClick={onClickAdd}
              />
            ))}
          </div>
        </div>

        <Button className="h-13.75 px-10 text-base rounded-[18px] w-full mt-10">
          Add to cart for {totalPrice} kr
        </Button>
      </div>
    </div>
  );
};
