"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface Props {
  className?: string;
}

const categories = [
  "Pizzas",
  "Combos",
  "Snacks",
  "Cocktails",
  "Coffee",
  "Drinks",
  "Desserts",
];

export default function Categories({ className }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className={cn(
        "inline-flex gap-1 bg-gray-50 p-1 rounded-2xl mt-2",
        className,
      )}
    >
      {categories.map((category, index) => (
        <button
          onClick={() => setActiveIndex(index)}
          className={cn(
            "flex items-center font-bold  h-11 rounded-2xl px-5 cursor-pointer",
            activeIndex === index &&
              "bg-white shadow-md shadow-gray-200 text-primary",
          )}
          key={index}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
