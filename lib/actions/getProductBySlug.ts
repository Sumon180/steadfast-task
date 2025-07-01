"use server";

import { SingleProduct } from "@/types";
import axios from "axios";

interface ProductResponse {
  data: SingleProduct;
}

export const getProductBySlug = async (
  slug: string
): Promise<SingleProduct | null> => {
  try {
    const res = await axios.get<ProductResponse>(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/product/${slug}`
    );
    return res.data.data;
  } catch (error) {
    console.error("Product not found or API error", error);
    return null;
  }
};
