"use client";

import { cn } from "@/shared/lib/utils";
import { useCategoryStore } from "@/shared/store/category";
import { ProductItem } from "@prisma/client";
import { useEffect, useRef } from "react";
import { useIntersection } from "../../shared/hooks/useIntersection";
import { ProductCard } from "./ProductCard";
import { Title } from "./Title";

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  variations: ProductItem[];
  description: string | null;
};

type Props = {
  title: string;
  categoryId: number;
  items: Product[];
  listClassName?: string;
  className?: string;
};
export const ProductGroupList = ({
  title,
  items,
  listClassName,
  className,
  categoryId,
}: Props) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = useRef<HTMLDivElement>(null);
  const intersection = useIntersection(intersectionRef);

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [intersection?.isIntersecting, title, categoryId]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="mb-6" />
      <div className={cn("grid grid-cols-3 gap-12.5", listClassName)}>
        {items.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.variations[0]?.price}
            description={product?.description}
          />
        ))}
      </div>
    </div>
  );
};
