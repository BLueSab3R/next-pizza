"use client";
import { cn } from "@/shared/lib/utils";
import { Category } from "@prisma/client";
import { useEffect, useState } from "react";
import { Categories, Container, Sort } from "./index";

interface Props {
  categories: Category[];
  className?: string;
}

export const TopBar = ({ categories, className }: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        className,
        isScrolled && "bg-white/80 backdrop-blur-md shadow-lg shadow-black/5"
      )}
    >
      <Container className="flex items-center justify-between">
        <Categories items={categories} />
        <Sort />
      </Container>
    </div>
  );
};
