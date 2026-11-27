
import type { GetProductsParams } from "../types/product-query.types";

export function buildProductsQuery(params: GetProductsParams) {
  const searchParams = new URLSearchParams();

  if (params.keyword) searchParams.set("keyword", params.keyword);
  if (params.page) searchParams.set("page", String(params.page));
  if (params.limit) searchParams.set("limit", String(params.limit));
  if (params.sort) searchParams.set("sort", params.sort);
  if (params.brand) searchParams.set("brand", params.brand);
  if (params.category) searchParams.set("category", params.category);

  if (params.categoryIn) {
    searchParams.set("category[in]", params.categoryIn);
  }

  if (params.minPrice !== undefined) {
    searchParams.set("price[gte]", String(params.minPrice));
  }

  if (params.maxPrice !== undefined) {
    searchParams.set("price[lte]", String(params.maxPrice));
  }

  return searchParams;
}
