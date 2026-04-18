import React from "react";
import { Checkbox } from "../ui";

export interface FilterCheckBoxProps {
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
}

export const FilterCheckBox = ({
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked,
}: FilterCheckBoxProps) => {
  return (
    <div className="flex items-center space-x-2 cursor-pointer">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="rounded-xl w-6 h-6 cursor-pointer"
        id={`checkbox-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${String(value)}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
