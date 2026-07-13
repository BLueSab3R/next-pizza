"use client";

import { ChoosePizzaForm, ChooseProductForm } from "@/shared/components/index";
import { cn } from "@/shared/lib/utils";
import { Dialog } from "@/shared/ui";
import { DialogContent, DialogTitle } from "@/shared/ui/dialog";
import { ProductWithRelations } from "@/types/prisma";
import { useRouter } from "next/navigation";

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal = ({ product, className }: Props) => {
  const router = useRouter();
  const isPizzaForm = Boolean(product.variations[0].pizzaType);
  console.log(product);
  return (
    <Dialog onOpenChange={() => router.back()} open={Boolean(product)}>
      <DialogContent
        className={cn(
          className,
          "p-0 max-w-265 w-265 min-h-140 bg-white overflow-hidden"
        )}
      >
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            description={product.description || ""}
            ingredients={product.ingredients}
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
