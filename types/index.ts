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

export interface Variations {
  id: number;
  image: string;
}

export interface Images {
  url: string;
}
export interface SingleProduct {
  id: number;
  name: string;
  category_id: number;
  sub_category_id: number;
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

export interface Subchild {
  id: number;
  name: string;
  slug: string;
  image: string;
}

export interface Subcategory {
  id: number;
  name: string;
  slug: string;
  image: string;
  subchilds: Subchild[];
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  subcategories: Subcategory[];
}
