import axiosInstance from "axios";
import { CartDTO } from "./dto/cart.dto";

export const fetchCart = async (): Promise<CartDTO> => {
  const { data } = await axiosInstance.get<CartDTO>("/api/cart");
  return data;
};
