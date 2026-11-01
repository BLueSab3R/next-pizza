import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui";
import { Ingredient } from "@prisma/client";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Title } from "./Title";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  ingredients: Ingredient[];
  className?: string;
}

export const ProductCard = ({
  id,
  name,
  price,
  imageUrl,
  ingredients,
  className,
}: Props) => {
  return (
    <div className={cn("h-full", className)}>
      <Link href={`/product/${id}`} className="flex flex-col h-full">
        <div className="flex justify-center h-65">
          <Image
            src={imageUrl}
            alt="Pizza"
            width={215}
            height={215}
            className="w-full h-full rounded-lg"
          />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400">
          {ingredients.map((ingredient) => ingredient.name).join(", ")}
        </p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-[20px]">
            from <b>{price}$</b>
          </span>
          <Button
            variant="secondary"
            className="cursor-pointer text-base font-bold"
          >
            <Plus size={20} className=" mr-1" />
            Add
          </Button>
        </div>
      </Link>
    </div>
  );
};
