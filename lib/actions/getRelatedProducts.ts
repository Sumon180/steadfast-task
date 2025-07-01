"use server";

import { Product } from "@/types";
import axios from "axios";

const API_BASE = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/shop/products`;

export const fetchRelatedProducts = async (
  categoryId: number
): Promise<Product[]> => {
  try {
    const response = await axios.get(API_BASE);
    const allProducts: Product[] = response.data.data;

    const related = allProducts.filter((p) => p.id === categoryId);

    return related;
  } catch (error) {
    console.error("Error fetching related products:", error);
    return [];
  }
};
