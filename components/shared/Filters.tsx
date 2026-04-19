"use client";

import { useState } from "react";
import {
  FilterCheckBox,
  Title,
  RangeSlider,
  CheckBoxFilterGroup,
} from "./index";
import { Input } from "../ui";
import { useFilterIngredients } from "./hooks/useFilterIngredients";
import { useSet } from "../shared/hooks/useSet";
interface Props {
  className?: string;
}

export const Filters = ({ className }: Props) => {
  const [prices, setPrices] = useState([0, 500]);
  const { ingredients, loading, onAddId } = useFilterIngredients();
  const [selectedIds, { toggle }] = useSet<string>(new Set());
  const items = ingredients.map((ingredient) => ({
    text: ingredient.name,
    value: String(ingredient.id),
  }));

  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckBox name="test 1" text="You may take it away" value="1" />
        <FilterCheckBox name="test 2" text="New" value="2" />
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
        name="ingredients"
        className="mt-5"
        limit={6}
        items={items}
        defaultItems={items.slice(0, 5)}
        loading={loading}
        onClickCheckbox={(id) => toggle(id)}
        selectedIds={selectedIds}
      />
    </div>
  );
};
