import { CartDTO } from "@/services/dto/cart.dto";
import { calcCartItemTotalPrice } from ".";
import { CartStateItem } from "../store";

interface ReturnProps {
  items: CartStateItem[];
  totalAmount: number;
}

export const getCartDetails = (data: CartDTO): ReturnProps => {
  const items = data.items.map((item) => ({
    id: item.id,
    quantity: item.quantity,
    name: item.productItem.product.name,
    imageUrl: item.productItem.product.imageUrl,
    totalPrice: calcCartItemTotalPrice(item),
    pizzaSize: item.productItem.size,
    pizzaType: item.productItem.pizzaType,
    ingredients: item.ingredients.map((ingredient) => ({
      name: ingredient.name,
      price: ingredient.price,
    })),
    productId: item.productItem.product.id,
  }));
  return { items, totalAmount: data.totalAmount };
};
