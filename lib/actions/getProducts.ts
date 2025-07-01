"use server";

import { Product } from "@/types";
import axios from "axios";

interface ProductResponse {
  data: Product[];
}

export const getProducts = async (): Promise<Product[]> => {
  try {
    const res = await axios.get<ProductResponse>(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/shop/products`
    );
    return res.data.data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};
