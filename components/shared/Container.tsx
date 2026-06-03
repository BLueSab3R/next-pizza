import { cn } from "@/lib/utils";
interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: Props) => {
  return (
    <div className={cn("mx-auto max-w-330 px-4", className)}>{children}</div>
  );
};
