import { ArrowUpDown } from "lucide-react";
import React from "react";

const sortItems = [""];

export default function Sort() {
  return (
    <div className="inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor pointer">
      <ArrowUpDown size={16} />
      <b>Sort by:</b>
      <b className="text-primary">Name</b>
    </div>
  );
}
