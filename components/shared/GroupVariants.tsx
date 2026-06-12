"use client";

import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  onClick?: (value: Variant["value"]) => void;
  selectedValue?: Variant["value"];
  items: readonly Variant[];
}

type Variant = {
  name: string;
  value: string;
  disabled?: boolean;
};

export const GroupVariants = ({
  items,
  selectedValue,
  onClick,
  className,
}: Props) => {
  return (
    <div
      className={cn(
        className,
        "flex justify-between bg-[#f3f3f7] rounded-3xl p-1 select-none"
      )}
    >
      {items.map((item) => (
        <button
          onClick={() => onClick?.(item.value)}
          key={item.name}
          className={cn(
            "flex items-center justify-center px-5 h-7.5 flex-1 rounded-3xl transition-all duration-300 text-sm",
            {
              "bg-white shadow": item.value === selectedValue,
              "text-gray-500 opacity-50  cursor-not-allowed": item.disabled,
            }
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
