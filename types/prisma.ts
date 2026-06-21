import { Ingredient, Product, ProductItem } from "@prisma/client";

export type ProductWithRelations = Product & {
  variations: ProductItem[];
  ingredients: Ingredient[];
};
