"use client";

import { useState, useEffect } from "react";
import { Title, RangeSlider, CheckBoxFilterGroup } from "./index";
import { Input } from "../ui";
import { useFilterIngredients } from "./hooks/useFilterIngredients";
import { useSet } from "../shared/hooks/useSet";

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

export const Filters = ({ className }: Props) => {
  const [prices, setPrices] = useState<PriceProps>({
    priceFrom: 0,
    priceTo: 500,
  });
  const { ingredients, loading, selectedIngredients, onAddId } =
    useFilterIngredients();

  const [selectedSizes, { toggle: toggleSize }] = useSet(new Set<string>([]));

  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>([]),
  );

  const items = ingredients.map((ingredient) => ({
    text: ingredient.name,
    value: String(ingredient.id),
  }));

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrices({ ...prices, [name]: value });
  };

  useEffect(() => {
    console.log(prices, ingredients, selectedIngredients, selectedSizes);
  }, [prices, ingredients, selectedIngredients, selectedSizes]);

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
          selected={pizzaTypes}
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
          selected={selectedSizes}
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
            value={String(prices.priceFrom)}
            onChange={(e) => updatePrice("priceFrom", Number(e.target.value))}
          />
          <Input
            type="number"
            min={100}
            max={500}
            placeholder="500"
            value={String(prices.priceTo)}
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
          value={[prices.priceFrom, prices.priceTo]}
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
        onClickCheckbox={(id) => onAddId(id)}
        selected={selectedIngredients}
      />
    </div>
  );
};
