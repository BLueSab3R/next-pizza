import React from "react";

interface SelectedItem {
  id: string;
  name: string;
  value: string;
}

interface Props {
  className?: string;
  items: SelectedItem[];
  onClickItem?: (item: string) => void;
}

export const SelectedList = ({ className, items, onClickItem }: Props) => {
  const itemsArray = Array.from(items);
  const onClickCheckbox = (value: string) => {
    console.log("Clicked item:", value);
    onClickItem?.(value);
  };
  if (items.length === 0) {
    return null;
  }
  return (
    <div className={`flex mt-5 flex-wrap gap-2 ${className || ""}`}>
      {itemsArray.map((item) => (
        <div
          key={item.id}
          className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-md flex items-center gap-2"
        >
          <button
            onClick={() => onClickCheckbox?.(item.value)}
            className="text-gray-400 cursor-pointer hover:text-black"
          >
            ×
          </button>
          {item.name}
        </div>
      ))}
    </div>
  );
};
