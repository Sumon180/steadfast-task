import { SingleProduct } from "@/types";
import axios from "axios";

const API_BASE = "http://157.230.240.97:9999/api/v1/shop/products";

export const fetchRelatedProducts = async (
  categoryId: number,
  currentSlug: string
): Promise<SingleProduct[]> => {
  try {
    const response = await axios.get(API_BASE);
    const allProducts: SingleProduct[] = response.data.data;

    const related = allProducts.filter(
      (p) => p.category_id === categoryId && p.slug !== currentSlug
    );

    return related;
  } catch (error) {
    console.error("Error fetching related products:", error);
    return [];
  }
};
