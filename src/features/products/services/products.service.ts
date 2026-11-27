import type {
  ProductResponse,
  ProductsResponse,
} from "../types/product.types";
import type { ProductReviewsResponse } from "../types/product-reviews.types";
import type { GetProductsParams } from "../types/product-query.types";
const PRODUCTS_API_URL =
  "https://ecommerce.routemisr.com/api/v1/products";


export async function getProducts(params?: GetProductsParams) {
  const searchParams = new URLSearchParams();

  if (params?.keyword) searchParams.set("keyword", params.keyword);
  if (params?.page) searchParams.set("page", String(params.page));
  if (params?.limit) searchParams.set("limit", String(params.limit));
  if (params?.sort) searchParams.set("sort", params.sort);
  if (params?.brand) searchParams.set("brand", params.brand);
  if (params?.category) searchParams.set("category[in]", params.category);

  if (params?.minPrice !== undefined) {
    searchParams.set("price[gte]", String(params.minPrice));
  }

  if (params?.maxPrice !== undefined) {
    searchParams.set("price[lte]", String(params.maxPrice));
  }

  const url = searchParams.size
    ? `${PRODUCTS_API_URL}?${searchParams.toString()}`
    : PRODUCTS_API_URL;

  const response = await fetch(url, {
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

