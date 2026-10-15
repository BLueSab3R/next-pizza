import axiosInstance from "axios";
import { CartDTO } from "./dto/cart.dto";

export const getCart = async (): Promise<CartDTO> => {
  const { data } = await axiosInstance.get<CartDTO>("/api/cart");
  return data;
};

export const fetchUpdateUserCart = async (
  itemId: number,
  quantity: number
): Promise<CartDTO> => {
  const { data } = await axiosInstance.patch<CartDTO>("/api/cart/" + itemId, {
    quantity,
  });
  return data;
};

export const removeCartItem = async (id: number) => {
  const { data } = await axiosInstance.delete<CartDTO>("/api/cart/" + id);
  return data;
};
