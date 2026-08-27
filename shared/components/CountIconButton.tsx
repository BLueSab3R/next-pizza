import { Minus, Plus } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "../ui";
import { CountButtonProps } from "./CountButton";

interface Props {
  size: CountButtonProps["size"];
  disabled?: boolean;
  type: "plus" | "minus";
  onClick: () => void;
  className?: string;
}

export const CountIconButton = ({
  className,
  size = "sm",
  type,
  onClick,
  disabled,
}: Props) => {
  return (
    <Button
      variant={"outline"}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "p-0 hover:bg-primary hover:text-white disabled:bg-white disabled:border-gray-400 disabled:text-gray-400 cursor-pointer disabled:cursor-not-allowed",
        size === "sm" ? "w-7.5 h-7.5 rounded-[10px]" : "w-9.5 h-9.5 rounded-md"
      )}
    >
      {type === "plus" ? (
        <Plus className={size === "sm" ? "h-4" : "h-5"} />
      ) : (
        <Minus className={size === "sm" ? "h-4" : "h-5"} />
      )}
    </Button>
  );
};
