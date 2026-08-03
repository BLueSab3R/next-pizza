import { cn } from "@/shared/lib/utils";

interface Props {
  className?: string;
  value: number;
}

export const CartItemsDetailsPrice = ({ className, value }: Props) => {
  return <h2 className={cn(className, "font-bold")}>{value}$</h2>;
};
