import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/sheet";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui";

interface Props {
  children: React.ReactNode;
  className?: string;
  totalAmount?: number;
}

export const CartDrawer = ({ children, totalAmount }: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#f4f1ee]">
        <SheetHeader>
          <SheetTitle className="text-2xl">
            In cart <span className="font-bold">3 item</span>
          </SheetTitle>
        </SheetHeader>
        {/* Items */}
        <SheetFooter className=" bg-white p-8">
          <div>
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Total:
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
              </span>
              <span className="text-lg font-bold">{totalAmount || 20}$</span>
            </div>
            <Link href="/cart">
              <Button type="submit" className="w-full h-12 text-base ">
                Submit an order
                <ArrowRight className="w-5 ml-2 rounded-lg" />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
