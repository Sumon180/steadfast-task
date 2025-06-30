import { Product } from "@/types";
import axios from "axios";

const API_BASE = "http://157.230.240.97:9999/api/v1/shop/products";

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
