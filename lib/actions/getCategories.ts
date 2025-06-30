// app/actions/getCategories.ts

import axios from "axios";
import { Category, Subcategory } from "@/types";

interface CategoriesResponse {
  message: string;
  data: Category[];
}

export async function getCategories(): Promise<Category[] | null> {
  try {
    const res = await axios.get<CategoriesResponse>(
      "http://157.230.240.97:9999/api/v1/categories",
      {
        // To mimic cache: "no-store", disable caching headers
        headers: {
          "Cache-Control": "no-store",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );

    return res.data.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return null;
  }
}

export async function getCategoryById(id: number): Promise<Category | null> {
  try {
    const res = await axios.get<CategoriesResponse>(
      "http://157.230.240.97:9999/api/v1/categories",
      {
        headers: {
          "Cache-Control": "no-store",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );

    const category = res.data.data.find((cat) => cat.id === id);
    return category ?? null;
  } catch (error) {
    console.error("Error fetching category:", error);
    return null;
  }
}

export async function getSubcategoryById(
  id: number
): Promise<Subcategory | null> {
  const categories = await getCategories();

  if (!categories) return null;

  for (const category of categories) {
    const subcategory = category.subcategories.find((sub) => sub.id === id);
    if (subcategory) return subcategory;
  }

  return null;
}
