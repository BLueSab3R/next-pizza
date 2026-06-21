import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui";
import { Title } from "./index";

interface Props {
  imageUrl: string;
  name: string;
  items?: [];
  description?: string;
  onClickAdd?: VoidFunction;
  className: string;
}

export const ChooseProductForm = ({
  imageUrl,
  name,
  description,
  items,
  onClickAdd,
  className,
}: Props) => {
  const totalPrice = 120;
  return (
    <div className={cn(className, "flex flex-1")}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <Image
          src={imageUrl}
          alt={name}
          width={350}
          height={350}
          className="relative left-2 top-2 transition-all z-10 duration-300 w-87.5 h-87.5"
        />
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
