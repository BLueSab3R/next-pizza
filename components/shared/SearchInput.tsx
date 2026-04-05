"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import { useClickAway } from "./hooks/useClickAway";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@prisma/client";
import { Api } from "@/services/api-clients";
import { useDebounce } from "react-use"; // Використовуємо все з react-use!
interface Props {
  className?: string;
}

export const SearchInput = ({ className }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);
  const [focused, setFocused] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useClickAway(searchRef, () => {
    setFocused(false);
  });
  const onClickItem = () => {
    console.log("item clicked");
  };

  useDebounce(
    () => {
      Api.products.search(searchQuery).then((items) => {
        setProducts(items);
      });
    },
    150,
    [searchQuery],
  );
  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />
      )}
      <div
        ref={searchRef}
        className={cn(
          "flex rounded-2xl flex-1 justify-between relative h-11 z-30",
          className,
        )}
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-500" />

        <input
          placeholder="Search pizza..."
          type="text"
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {products.length > 0 && (
          <div
            className={cn(
              "absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all  duration-300 invisible opacity-0    z-30",
              focused && "visible opacity-100 top-12",
            )}
          >
            {products.map((product) => (
              <Link
                key={product.id}
                onClick={onClickItem}
                href={`/product/${product.id}`}
                className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10 cursor-pointer"
              >
                <Image
                  className="rounded-sm "
                  src={product.imageUrl}
                  width={32}
                  height={32}
                  alt={product.name}
                />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
