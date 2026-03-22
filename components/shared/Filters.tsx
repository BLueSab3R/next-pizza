"use client";

import { useState } from "react";
import {
  FilterCheckBox,
  Title,
  RangeSlider,
  CheckBoxFilterGroup,
} from "./index";
import { Input } from "../ui";

interface Props {
  className?: string;
}

export const Filters = ({ className }: Props) => {
  const [prices, setPrices] = useState([0, 500]);

  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckBox text="You may take it away" value="1" />
        <FilterCheckBox text="New" value="2" />
      </div>
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p>Price from and to</p>
        <div className="flex  gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={500}
            defaultValue={0}
          />
          <Input type="number" min={100} max={500} placeholder="500" />
        </div>
        <RangeSlider
          onValueChange={setPrices}
          min={0}
          max={500}
          step={10}
          value={prices}
        />
      </div>
      <CheckBoxFilterGroup
        title="Ingredients"
        className="mt-5"
        limit={6}
        items={[
          { text: "Tomato", value: "1" },
          { text: "Cheese", value: "2" },
          { text: "Pepperoni", value: "3" },
          { text: "Mushrooms", value: "4" },
          { text: "Onions", value: "5" },
          { text: "Olives", value: "6" },
          { text: "Bacon", value: "7" },
          { text: "Pineapple", value: "8" },
          { text: "Spinach", value: "9" },
          { text: "Ham", value: "10" },
          { text: "Sausage", value: "11" },
          { text: "Peppers", value: "12" },
          { text: "Chicken", value: "13" },
          { text: "Beef", value: "14" },
          { text: "Anchovies", value: "15" },
        ]}
        defaultItems={[
          { text: "Tomato", value: "1" },
          { text: "Cheese", value: "2" },
          { text: "Pepperoni", value: "3" },
          { text: "Mushrooms", value: "4" },
          { text: "Onions", value: "5" },
          { text: "Olives", value: "6" },
          { text: "Bacon", value: "7" },
          { text: "Pineapple", value: "8" },
        ]}
      />
    </div>
  );
};
