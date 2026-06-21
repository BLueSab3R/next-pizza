import { cn } from "@/shared/lib/utils";
import { Ingredient } from "@prisma/client";
import { Button } from "../ui";
import { PizzaImage, Title } from "./index";

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
  const totalPrice = 120;
  const size = 30;
  return (
    <div className={cn(className, "flex flex-1")}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <PizzaImage size={size} imageUrl={imageUrl} />
      </div>
      <div className="bg-[#f7f6f5] w-122.5 p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{description}</p>
        <Button className="h-13.75 px-10 text-base rounded-[18px] w-full mt-10">
          Add to cart for {totalPrice}
        </Button>
      </div>
    </div>
  );
};
