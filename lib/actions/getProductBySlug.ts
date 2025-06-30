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
      `http://157.230.240.97:9999/api/v1/product/${slug}`
    );
    return res.data.data;
  } catch (error) {
    console.error("Product not found or API error", error);
    return null;
  }
};
