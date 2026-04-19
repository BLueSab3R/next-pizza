import React from "react";
import { Checkbox } from "../ui";

export interface FilterCheckBoxProps {
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  name?: string;
}

export const FilterCheckBox = ({
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked,
  name,
}: FilterCheckBoxProps) => {
  return (
    <div className="flex items-center space-x-2 cursor-pointer">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="rounded-xl w-6 h-6 cursor-pointer"
        id={`checkbox-${String(name)}-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${String(name)}-${String(value)}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
