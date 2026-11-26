import type {
  Subcategory,
  SubcategoriesResponse,
} from "../types/subcategory.types";

const SUBCATEGORIES_API_URL =
  "https://ecommerce.routemisr.com/api/v1/categories";

export async function getSubcategories(
  categoryId: string,
): Promise<Subcategory[]> {
  const response = await fetch(
    `${SUBCATEGORIES_API_URL}/${categoryId}/subcategories`,
    {
      next: {
        revalidate: 60,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch subcategories");
  }

  const result: SubcategoriesResponse = await response.json();

  return result.data;
}