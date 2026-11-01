import axiosInstance from "axios";
import { CartDTO, CreateCartItemValues } from "./dto/cart.dto";

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

export const addCartItem = async (
  values: CreateCartItemValues
): Promise<CartDTO> => {
  console.log(values);
  const { data } = await axiosInstance.post<CartDTO>("/api/cart/", values);
  return data;
};
