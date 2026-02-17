import React from "react";
import { Title } from "./Title";
import { cn } from "@/lib/utils";
import { ProductCard } from "./ProductCard";

type ProductItem = {
  price: number;
};
type Product = {
  id: number;
  name: string;
  imageUrl: string;
  items: ProductItem[];
};

type Props = {
  title: string;
  items: Product[];
  listClassName: number;
  className: string;
  categoryId: number;
};
export const ProductGroupList = ({
  title,
  items,
  listClassName,
  className,
  categoryId,
}: Props) => {
  return (
    <div className={className}>
      <Title text={title} size="lg" className="mb-6" />
      <div className={cn("grid grid-cols-3 gap-12.5", listClassName)}>
        {items.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.items[0].price}
          />
        ))}
      </div>
    </div>
  );
};
