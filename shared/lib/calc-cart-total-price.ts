import { CartStateItem } from "../store/cart";

export const calcCartTotalPrice = (items: CartStateItem[]): number => {
  return items.reduce((acc, item) => acc + item.totalPrice, 0);
};
