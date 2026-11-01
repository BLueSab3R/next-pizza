import { Api } from "@/services/api-clients";
import { CreateCartItemValues } from "@/services/dto/cart.dto";
import { create } from "zustand";
import { getCartDetails } from "../lib";

export type CartStateItem = {
  id: number;
  totalPrice: number;

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

export const useCartStore = create<CartState>((set) => ({
  items: [],
  error: false,
  loading: true,
  totalAmount: 0,

  fetchCartItems: async () => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.getCart();
      set(getCartDetails(data));
    } catch (error) {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  removeCartItem: async (id: number) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.removeCartItem(id);
      set(getCartDetails(data));
    } catch (error) {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  updateItemQuantity: async (id: number, quantity: number) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.fetchUpdateUserCart(id, quantity);
      set(getCartDetails(data));
    } catch (error) {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  addCartItem: async (values: CreateCartItemValues) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.addCartItem(values);
      set(getCartDetails(data));
    } catch (error) {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
