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
import { useEffect } from "react";
import { CartDrawerItem } from ".";
import { PizzaSize, PizzaType } from "../constants/pizza";
import { getCartItemDetail } from "../lib";
import { useCartStore } from "../store";
import { Button } from "../ui";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const CartDrawer = ({ children }: Props) => {
  const totalAmount = useCartStore((state) => state.totalAmount);
  const items = useCartStore((state) => state.items);

  const stateUpdateQuantity = useCartStore((state) => state.updateItemQuantity);
  const removeCartItem = useCartStore((state) => state.removeCartItem);
  const fetchCartItems = useCartStore((state) => state.fetchCartItems);

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    stateUpdateQuantity(id, newQuantity);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#f4f1ee]">
        <SheetHeader>
          <SheetTitle className="text-2xl">
            In cart <span className="font-bold">{items.length} item</span>
          </SheetTitle>
        </SheetHeader>
        <div className="scrollbar-cart overflow-auto">
          {items.map((item) => (
            <CartDrawerItem
              id={item.id}
              key={item.id}
              imageUrl={item.imageUrl}
              details={
                item.pizzaSize && item.pizzaSize
                  ? getCartItemDetail(
                      item.pizzaType as PizzaType,
                      item.pizzaSize as PizzaSize,
                      item.ingredients
                    )
                  : ""
              }
              name={item.name}
              price={item.totalPrice}
              quantity={item.quantity}
              onClickCountButton={(type) =>
                onClickCountButton(item.id, item.quantity, type)
              }
              onClickRemoveButton={() => removeCartItem(item.id)}
            />
          ))}
        </div>
        <SheetFooter className=" bg-white p-8">
          <div>
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Total:
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
              </span>
              <span className="text-lg font-bold">{totalAmount}$</span>
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
