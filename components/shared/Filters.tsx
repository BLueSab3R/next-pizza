"use client";

import { Ingredient } from "@prisma/client";
import { useMemo } from "react";
import {
  useFilters,
  useIngredients,
  useQueryFilters,
} from "../../shared/hooks";
import { Input } from "../ui";
import { CheckBoxFilterGroup, RangeSlider, SelectedList, Title } from "./index";

interface Props {
  className?: string;
}

type ItemType = {
  text: string;
  value: string;
};

export const Filters = ({ className }: Props) => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();

  useQueryFilters(filters);

  const items = useMemo(() => {
    return (ingredients || []).map((ingredient: Ingredient) => ({
      text: ingredient.name,
      value: String(ingredient.id),
    }));
  }, [ingredients]);

  const dispayedIngredients = Array.from(filters.selectedIngredients).map(
    (id) => {
      const foundIngredient = items.find((item: ItemType) => item.value === id);
      return {
        id,
        name: foundIngredient ? foundIngredient.text : "",
        value: foundIngredient?.value ? foundIngredient?.value : "",
      };
    }
  );

  const updatePrices = (prices: number[]) => {
    filters.setPrices("priceFrom", prices[0]);
    filters.setPrices("priceTo", prices[1]);
  };

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
          onClickCheckbox={filters.setPizzaTypes}
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
          onClickCheckbox={filters.setSizes}
          selected={filters.selectedSizes}
        />
      </div>
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold">Price from and to:</p>
        <div className="flex  gap-3 mb-5 mt-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={500}
            value={String(filters.prices.priceFrom)}
            onChange={(e) =>
              filters.setPrices("priceFrom", Number(e.target.value))
            }
          />
          <Input
            type="number"
            min={100}
            max={500}
            placeholder="500"
            value={String(filters.prices.priceTo)}
            onChange={(e) =>
              filters.setPrices("priceTo", Number(e.target.value))
            }
          />
        </div>
        <RangeSlider
          onValueChange={updatePrices}
          min={0}
          max={500}
          step={10}
          value={[filters.prices.priceFrom, filters.prices.priceTo]}
        />
      </div>
      {filters.selectedIngredients.size > 0 && (
        <SelectedList
          className="cursor-pointer x"
          items={dispayedIngredients}
          onClickItem={filters.removeIngredients}
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
        onClickCheckbox={filters.setIngredients}
        selected={filters.selectedIngredients}
      />
    </div>
  );
};
