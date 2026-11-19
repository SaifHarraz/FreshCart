import type {
  ProductResponse,
  ProductsResponse,
} from "../types/product.types";

const PRODUCTS_API_URL =
  "https://ecommerce.routemisr.com/api/v1/products";

export async function getProducts() {
  const response = await fetch(PRODUCTS_API_URL, {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const result: ProductsResponse = await response.json();

  return result;
}

export async function getProductById(id: string) {
  const response = await fetch(`${PRODUCTS_API_URL}/${id}`, {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const result: ProductResponse = await response.json();

  return result.data;
}
