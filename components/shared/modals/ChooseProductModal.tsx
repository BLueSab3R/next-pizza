"use client";

import { Dialog } from "@/components/ui";
import { DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Product } from "@prisma/client";
import { useRouter } from "next/navigation";

interface Props {
  product: Product;
}

export const ChooseProductModal = ({ product }: Props) => {
  const router = useRouter();

  return (
    <Dialog onOpenChange={() => router.back()} open={Boolean(product)}>
      <DialogContent className="p-0 max-w-265 w-265 min-h-125 bg-white overflow-hidden">
        {/* <Title text={product.name} /> */}
        <DialogTitle>{product.name}</DialogTitle>
      </DialogContent>
    </Dialog>
  );
};
