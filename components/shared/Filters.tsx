"use client";

import { useMemo } from "react";
import { Title, RangeSlider, CheckBoxFilterGroup, SelectedList } from "./index";
import { Input } from "../ui";
import { useFilters, useIngredients, useQueryFilters } from "@/hooks";

interface Props {
  className?: string;
}

export const Filters = ({ className }: Props) => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();

  useQueryFilters(filters);

  const items = useMemo(() => {
    return (ingredients || []).map((ingredient) => ({
      text: ingredient.name,
      value: String(ingredient.id),
    }));
  }, [ingredients]);

  const dispayedIngredients = Array.from(filters.selectedIngredients).map(
    (id) => {
      const foundIngredient = items.find((item) => item.value === id);
      return {
        id,
        name: foundIngredient ? foundIngredient.text : "",
        value: foundIngredient?.value,
      };
    },
  );

  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <CheckBoxFilterGroup
          title="Pizza type"
          name="pizzaType"
          items={[
            { text: "Thin", value: "1" },
            { text: "Traditional", value: "2" },
          ]}
          onClickCheckbox={togglePizzaTypes}
          selected={filters.pizzaTypes}
        />
        <CheckBoxFilterGroup
          title="Sizes"
          name="sizes"
          items={[
            { text: "20cm", value: "20" },
            { text: "30cm", value: "30" },
            { text: "40cm", value: "40" },
          ]}
          onClickCheckbox={toggleSize}
          selected={filters.selectedSizes}
        />
      </div>
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p>Price from and to</p>
        <div className="flex  gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={500}
            value={String(filters.prices.priceFrom)}
            onChange={(e) => updatePrice("priceFrom", Number(e.target.value))}
          />
          <Input
            type="number"
            min={100}
            max={500}
            placeholder="500"
            value={String(filters.prices.priceTo)}
            onChange={(e) => updatePrice("priceTo", Number(e.target.value))}
          />
        </div>
        <RangeSlider
          onValueChange={([priceFrom, priceTo]) =>
            setPrices({ priceFrom, priceTo })
          }
          min={0}
          max={500}
          step={10}
          value={[filters.prices.priceFrom, filters.prices.priceTo]}
        />
      </div>
      {filters.selectedIngredients.size > 0 && (
        <SelectedList
          items={dispayedIngredients}
          onClickItem={(id) => removeId(id)}
        />
      )}
      <CheckBoxFilterGroup
        title="Ingredients"
        name="ingredients"
        className="mt-5"
        limit={6}
        items={items}
        defaultItems={items.slice(0, 5)}
        loading={loading}
        onClickCheckbox={(id) => onAddId(id)}
        selected={filters.selectedIngredients}
      />
    </div>
  );
};
