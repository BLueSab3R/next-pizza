"use client";

import { cn } from "@/lib/utils";

type TitleSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

interface Props {
  size?: TitleSize;
  className?: string;
  text: string;
}

const mapTagBySize = {
  xs: "h5",
  sm: "h4",
  md: "h3",
  lg: "h2",
  xl: "h1",
  "2xl": "h1",
} as const;

const mapClassNameBySize = {
  xs: "text-[16px]",
  sm: "text-[22px]",
  md: "text-[26px]",
  lg: "text-[32px]",
  xl: "text-[40px]",
  "2xl": "text-[48px]",
} as const;

export const Title = ({ size = "sm", text, className }: Props) => {
  const Tag = mapTagBySize[size as TitleSize];
  return (
    <Tag
      className={cn("font-bold font-sans", mapClassNameBySize[size], className)}
    >
      {text}
    </Tag>
  );
};
