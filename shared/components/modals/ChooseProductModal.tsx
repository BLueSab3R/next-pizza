"use client";

import { cn } from "@/shared/lib/utils";
import { Dialog } from "@/shared/ui";
import { DialogContent, DialogTitle } from "@/shared/ui/dialog";
import { ProductWithRelations } from "@/types/prisma";
import { useRouter } from "next/navigation";
import { ChoosePizzaForm, ChooseProductForm } from "../index";

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal = ({ product, className }: Props) => {
  const router = useRouter();
  const isPizzaForm = Boolean(product.variations[0].pizzaType);

  return (
    <Dialog onOpenChange={() => router.back()} open={Boolean(product)}>
      <DialogContent
        className={cn(
          className,
          "p-0 max-w-265 w-265 min-h-125 bg-white overflow-hidden"
        )}
      >
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            description={product.description || ""}
            ingredients={[]}
          />
        ) : (
          <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
            description={product.description || ""}
          />
        )}
        <DialogTitle className="sr-only">{product.name}</DialogTitle>
      </DialogContent>
    </Dialog>
  );
};
