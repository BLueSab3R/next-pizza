import { Search } from "lucide-react";
import React from "react";

interface Props {
  className?: string;
}

export const SearchInput = ({ className }: Props) => {
  return (
    <div className="flex rounded-2xl flex-1 justify-between relative h-11">
      <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-500" />
      <input
        placeholder="Search pizza..."
        type="text"
        className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
      />
    </div>
  );
};
