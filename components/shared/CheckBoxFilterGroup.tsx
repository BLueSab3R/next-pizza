"use client";

import { useState } from "react";
import { FilterCheckBox, FilterCheckBoxProps } from "../shared/FilterCheckBox";
import { Input, Skeleton } from "../ui";
type Item = FilterCheckBoxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit: number;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (values: string) => void;
  className?: string;
  loading?: boolean;
  selectedIds?: Set<string>;
  name?: string;
}

export const CheckBoxFilterGroup = ({
  title,
  items,
  defaultItems,
  limit,
  searchInputPlaceholder = "Search...",
  onClickCheckbox,
  className,
  loading,
  selectedIds,
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

  if (loading) {
    return (
      <div className={className}>
        <p className="font-bold mb-3">{title}</p>
        {[...Array(limit)].map((_, index) => (
          <Skeleton className=" h-6 mb-5" key={index} />
        ))}
      </div>
    );
  }

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
        {displayedItems.map((item) => (
          <FilterCheckBox
            key={item.value}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
            checked={selectedIds?.has(item.value)}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
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
