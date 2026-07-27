import { ArrowRight, ShoppingCart } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "../ui";
import { CartDrawer } from "./index";

interface Props {
  className?: string;
}

export const CartButton = ({ className }: Props) => {
  const { totalAmount, items, loading } = useCart();
  return (
    <CartDrawer>
      <Button
        loading={loading}
        className={cn(className, "group relative cursor-pointer", {
          "w-[105px]": loading,
          className,
        })}
      >
        <b>{totalAmount}</b>
        <span className="h-full w-px bg-white/30 mx-2" />
        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
          <b>{items.length}</b>
        </div>
        <ArrowRight
          size={20}
          className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
        />
      </Button>
    </CartDrawer>
  );
};
