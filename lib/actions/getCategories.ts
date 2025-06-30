// app/actions/getCategories.ts
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

interface CategoriesResponse {
  message: string;
  data: Category[];
}

export async function getCategories(): Promise<Category[] | null> {
  try {
    const res = await fetch("http://157.230.240.97:9999/api/v1/categories", {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch categories");

    const json: CategoriesResponse = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return null;
  }
}

export async function getCategoryById(id: number): Promise<Category | null> {
  try {
    const res = await fetch("http://157.230.240.97:9999/api/v1/categories", {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch categories");

    const json = await res.json();
    const category = json.data.find((cat: Category) => cat.id === id);
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
