import axios from "axios";

export interface Variations {
  id: number;
  image: string;
}

export interface Images {
  url: string;
}
export interface Product {
  id: number;
  name: string;
  slug: string;
  product_detail: {
    id: number;
    regular_price: string;
    discount_price: string;
  };
  image: Images[];
  thumbnail: string;
  available_stock: number;
  variations: Variations[];
  rating_avg: number;
  rating_count: number;
  is_variant: boolean;
}

interface ProductResponse {
  data: Product;
}

export const getProductBySlug = async (
  slug: string
): Promise<Product | null> => {
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
