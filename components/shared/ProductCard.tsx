import { Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui";
import { Title } from "./Title";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard = ({
  id,
  name,
  price,
  imageUrl,
  className,
}: Props) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center  h-65">
          <img
            src={imageUrl}
            alt="Pizza"
            width={215}
            height={215}
            className="w-full h-full rounded-lg"
          />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400">random text</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            from <b>{price}kr</b>
          </span>
          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className=" mr-1" />
            Add
          </Button>
        </div>
      </Link>
    </div>
  );
};
