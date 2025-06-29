// lib/getProducts.ts
import axios from "axios";

export interface Badge {
  id: number;
  name: string;
  type: number;
  type_label: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  regular_price: string;
  discount_price: string;
  thumbnail: string;
  available_stock: number;
  badges: Badge[];
}

interface ProductResponse {
  data: Product[];
}

export const getProducts = async (): Promise<Product[]> => {
  const res = await axios.get<ProductResponse>(
    "http://157.230.240.97:9999/api/v1/shop/products"
  );
  return res.data.data;
};
