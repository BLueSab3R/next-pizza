"use client";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/sheet";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getCartItemDetail } from "../lib";
import { Button } from "../ui";
import { CartDrawerItem } from "./CartDrawerItem";

interface Props {
  children: React.ReactNode;
  className?: string;
  totalAmount?: number;
}

export const CartDrawer = ({ children, totalAmount }: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#f4f1ee]">
        <SheetHeader>
          <SheetTitle className="text-2xl">
            In cart <span className="font-bold">3 item</span>
          </SheetTitle>
        </SheetHeader>
        <div className="scrollbar-cart overflow-auto">
          <CartDrawerItem
            id={1}
            imageUrl="http://localhost:3000/_next/image?url=https%3A%2F%2Fpizzahut-images.futureordering.com%2Fimages%2Fproduct%2F4%2FFA35B15078575E1B43939C02B7EAC9E0D%2F760x706.jpg&w=640&q=75"
            details={getCartItemDetail(2, 30, [
              { name: "test" },
              { name: "test2" },
            ])}
            name="Pepperoni Lovers"
            price={1}
            quantity={24}
          />
          <CartDrawerItem
            id={1}
            imageUrl="http://localhost:3000/_next/image?url=https%3A%2F%2Fpizzahut-images.futureordering.com%2Fimages%2Fproduct%2F4%2FFA35B15078575E1B43939C02B7EAC9E0D%2F760x706.jpg&w=640&q=75"
            details={getCartItemDetail(2, 30, [
              { name: "test" },
              { name: "test2" },
            ])}
            name="Pepperoni Lovers"
            price={1}
            quantity={24}
          />
          <CartDrawerItem
            id={1}
            imageUrl="http://localhost:3000/_next/image?url=https%3A%2F%2Fpizzahut-images.futureordering.com%2Fimages%2Fproduct%2F4%2FFA35B15078575E1B43939C02B7EAC9E0D%2F760x706.jpg&w=640&q=75"
            details={getCartItemDetail(2, 30, [
              { name: "test" },
              { name: "test2" },
            ])}
            name="Pepperoni Lovers"
            price={1}
            quantity={24}
          />
          <CartDrawerItem
            id={1}
            imageUrl="http://localhost:3000/_next/image?url=https%3A%2F%2Fpizzahut-images.futureordering.com%2Fimages%2Fproduct%2F4%2FFA35B15078575E1B43939C02B7EAC9E0D%2F760x706.jpg&w=640&q=75"
            details={getCartItemDetail(2, 30, [
              { name: "test" },
              { name: "test2" },
            ])}
            name="Pepperoni Lovers"
            price={1}
            quantity={24}
          />
          <CartDrawerItem
            id={1}
            imageUrl="http://localhost:3000/_next/image?url=https%3A%2F%2Fpizzahut-images.futureordering.com%2Fimages%2Fproduct%2F4%2FFA35B15078575E1B43939C02B7EAC9E0D%2F760x706.jpg&w=640&q=75"
            details={getCartItemDetail(2, 30, [
              { name: "test" },
              { name: "test2" },
            ])}
            name="Pepperoni Lovers"
            price={1}
            quantity={24}
          />
          <CartDrawerItem
            id={1}
            imageUrl="http://localhost:3000/_next/image?url=https%3A%2F%2Fpizzahut-images.futureordering.com%2Fimages%2Fproduct%2F4%2FFA35B15078575E1B43939C02B7EAC9E0D%2F760x706.jpg&w=640&q=75"
            details={getCartItemDetail(2, 30, [
              { name: "test" },
              { name: "test2" },
            ])}
            name="Pepperoni Lovers"
            price={1}
            quantity={24}
          />
        </div>
        <SheetFooter className=" bg-white p-8">
          <div>
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Total:
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
              </span>
              <span className="text-lg font-bold">{totalAmount || 20}$</span>
            </div>
            <Link href="/cart">
              <Button type="submit" className="w-full h-12 text-base ">
                Submit an order
                <ArrowRight className="w-5 ml-2 rounded-lg" />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
