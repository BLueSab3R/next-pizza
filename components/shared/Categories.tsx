"use client";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";

interface Props {
  className?: string;
}

const categories = [
  { id: 1, name: "Pizzas" },
  { id: 2, name: "Combos" },
  { id: 3, name: "Snacks" },
  { id: 4, name: "Sandwich" },
  { id: 5, name: "Drinks" },
  { id: 6, name: "Desserts" },
];

export const Categories = ({ className }: Props) => {
  const activeCategoryId = useCategoryStore((state) => state.activeId);
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);

  const handleCategoryClick = (categoryId: number) => {
    setActiveCategoryId(categoryId);
  };

  return (
    <div
      className={cn(
        "inline-flex gap-1 bg-gray-50 p-1 rounded-2xl mt-2",
        className
      )}
    >
      {categories.map(({ name, id }) => (
        <a
          onClick={() => handleCategoryClick(id)}
          className={cn(
            "flex items-center font-bold  h-11 rounded-2xl px-5 cursor-pointer",
            activeCategoryId === id &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          key={id}
          href={`/#${name}`}
        >
          {name}
        </a>
      ))}
    </div>
  );
};
