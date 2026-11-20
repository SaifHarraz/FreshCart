import type {
  ProductResponse,
  ProductsResponse,
} from "../types/product.types";
import type { ProductReviewsResponse } from "../types/product-reviews.types";

const PRODUCTS_API_URL =
  "https://ecommerce.routemisr.com/api/v1/products";

export async function getProducts() {
  const response = await fetch(PRODUCTS_API_URL, {
    next: {
      revalidate: 60,
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
      revalidate: 60,
    },
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const result: ProductResponse = await response.json();

  return result.data;
}

export async function getProductReviews(
  productId: string,
  
) {
  const params = new URLSearchParams({
    sort: "-createdAt,-rating",
  });

  const response = await fetch(
    `${PRODUCTS_API_URL}/${productId}/reviews?${params.toString()}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch product reviews");
  }

  const result: ProductReviewsResponse = await response.json();

  return result;
}

