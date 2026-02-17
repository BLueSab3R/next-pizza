"use client";

import { useState } from "react";
import { FilterCheckBox, FilterCheckBoxProps } from "../shared/FilterCheckBox";
import { Input } from "../ui";
type Item = FilterCheckBoxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit: number;
  searchInputPlaceholder?: string;
  onChange: (values: string[]) => void;
  className?: string;
}

export const CheckBoxFilterGroup = ({
  title,
  items,
  defaultItems,
  limit,
  searchInputPlaceholder = "Search...",
  onChange,
  className,
}: Props) => {
  const [showAll, setShowAll] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");
  const onChangeFilterSearch = (value: string) => {
    setSearchFilter(value);
  };
  const displayedItems = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchFilter.toLocaleLowerCase()),
      )
    : defaultItems.slice(0, limit);

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>
      <div className="mb-5">
        {showAll && (
          <Input
            placeholder={searchInputPlaceholder}
            onChange={(e) => onChangeFilterSearch(e.target.value)}
            className="bg-gray-50 border-none"
          />
        )}
      </div>
      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar ">
        {displayedItems.map((item, index) => (
          <FilterCheckBox
            key={index}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={(ids) => console.log(ids)}
          />
        ))}
      </div>
      {items.length > limit && (
        <div
          className={
            showAll ? "border-t border-t-neutral-100 mt-4 cursor-pointer" : ""
          }
        >
          <button
            className="text-primary mt-3 cursor-pointer"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "show less" : "+ show more"}
          </button>
        </div>
      )}
    </div>
  );
};
