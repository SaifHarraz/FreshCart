import type { Category } from "../types/category.types";

const CATEGORIES_API_URL =
  "https://ecommerce.routemisr.com/api/v1/categories";

interface CategoriesResponse {
  data: Category[];
}

export async function getCategories(): Promise<Category[]> {
  const response = await fetch(CATEGORIES_API_URL, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  const result: CategoriesResponse = await response.json();

  return result.data;
}