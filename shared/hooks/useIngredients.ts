import { Api } from "@/services/api-clients";
import { Ingredient } from "@prisma/client";
import { useEffect, useState } from "react";

export const useIngredients = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchIngredients() {
      try {
        const ingredients = await Api.ingredients.getAll();
        setIngredients(ingredients);
      } catch (e) {
        console.log(e);
        throw e;
      } finally {
        setLoading(false);
      }
    }
    fetchIngredients();
  }, []);

  return {
    ingredients,
    loading,
  };
};
