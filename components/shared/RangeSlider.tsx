import React from "react";
import { Slider } from "../ui";

type Props = {
  className: string;
  min: number;
  max: number;
  step: number;
  value?: number[] | readonly number[];
  onValueChange?: (values: number[]) => void;
};

export default function RangeSlider({
  min,
  max,
  step,
  value,
  onValueChange,
}: Props) {
  return (
    <div>
      <Slider
        defaultValue={[0, 500]}
        min={min}
        max={max}
        step={step}
        value={value}
        onValueChange={onValueChange}
        className="mx-auto w-full max-w-xs"
      />
      <div className="flex justify-between mt-2">
        <span className="text-sm font-medium">{value[0]} </span>
        <span className="text-sm font-medium">{value[1]} </span>
      </div>
    </div>
  );
}
