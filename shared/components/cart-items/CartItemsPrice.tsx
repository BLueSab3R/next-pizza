import { cn } from "@/shared/lib/utils";

interface Props {
  className?: string;
  value: number;
}

export const CartItemsPrice = ({ value, className }: Props) => {
  return (
    <div>
      <h2 className={cn(className, "font-bold text-xl")}>{value}$</h2>
    </div>
  );
};
