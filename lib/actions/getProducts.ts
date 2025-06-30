import { Product } from "@/types";
import axios from "axios";

interface ProductResponse {
  data: Product[];
}

export const getProducts = async (): Promise<Product[]> => {
  const res = await axios.get<ProductResponse>(
    "http://157.230.240.97:9999/api/v1/shop/products"
  );
  return res.data.data;
};
