
import type {
  Brand,
  BrandsResponse,
} from "../types/brand.types";

const BRANDS_API_URL =
  "https://ecommerce.routemisr.com/api/v1/brands";

export async function getBrands(): Promise<Brand[]> {
  const response = await fetch(`${BRANDS_API_URL}?limit=40`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch brands");
  }

  const result: BrandsResponse = await response.json();

  return result.data;
}
