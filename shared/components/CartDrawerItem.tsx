import { Trash2Icon } from "lucide-react";
import { cn } from "../lib/utils";
import { CartItemsProps } from "./cart-items/cart-items-details.types";
import {} from "./cart-items/CartItemInfo";
import * as CartItem from "./cart-items/index";
import { CountButton } from "./CountButton";

interface Props extends CartItemsProps {
  onClickCountButton?: (type: "plus" | "minus") => void;
  onClickRemoveButton?: () => void;
  className?: string;
}

export const CartDrawerItem = ({
  className,
  imageUrl,
  name,
  price,
  quantity,
  details,
  onClickRemoveButton,
  onClickCountButton,
}: Props) => {
  return (
    <div className={cn("flex bg-white p-5 gap-6", className)}>
      <CartItem.Image src={imageUrl} />

      <div className="flex-1">
        <CartItem.Info name={name} details={details} />

        <hr className="my-3" />

        <div className="flex items-center justify-between">
          <CountButton onClick={onClickCountButton} value={quantity} />

          <div className="flex items-center gap-3">
            <CartItem.Price value={price} />
            <Trash2Icon
              onClick={onClickRemoveButton}
              size={16}
              className="text-gray-400 cursor-pointer hover:text-gray-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
