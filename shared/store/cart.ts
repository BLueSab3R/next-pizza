import { Api } from "@/services/api-clients";
import { create } from "zustand";
import { getCartDetails } from "../lib";

export type CartStateItem = {
  id: number;
  totalPrice: number;
  size?: number;

  type?: number | null;
  pizzaSize?: number | null;
  pizzaType?: number | null;

  productId: number;
  imageUrl: string;
  ingredients: Array<{ name: string; price: number }>;

  name: string;
  quantity: number;
};

export interface CartState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: CartStateItem[];
  /* Get items from cart */
  fetchCartItems: () => Promise<void>;
  /* Request for the update */
  updateItemQuantity: (id: number, quantity: number) => Promise<void>;
  /* Request for adding the item */
  addCartItem: (values: any) => Promise<void>;
  /* Request to delete the item */
  removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  error: false,
  loading: true,
  totalAmount: 0,

  fetchCartItems: async () => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.fetchCart();
      set(getCartDetails(data));
    } catch (error) {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  removeCartItem: async (id: number) => {},
  updateItemQuantity: async (id: number, quantity: number) => {},
  addCartItem: async (id: number) => {},
}));
