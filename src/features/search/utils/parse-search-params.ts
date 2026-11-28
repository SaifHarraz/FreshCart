
import type { GetProductsParams } from "@/features/products/types/product-query.types";
import type { SearchPageSearchParams } from "../types/search-page.types";

export function parseSearchParamNumber(
  value?: string
): number | undefined {
  if (!value?.trim()) return undefined;

  const parsed = Number(value);

  return Number.isFinite(parsed) ? parsed : undefined;
}

export function parseSearchParams(
  params: SearchPageSearchParams
): GetProductsParams {
  const minPrice = parseSearchParamNumber(params.minPrice);
  const maxPrice = parseSearchParamNumber(params.maxPrice);
  const page = parseSearchParamNumber(params.page);
  const limit = parseSearchParamNumber(params.limit);

  return {
    ...(params.keyword?.trim() && { keyword: params.keyword.trim() }),
    ...(params.sort && { sort: params.sort }),
    ...(params.brand && { brand: params.brand }),
    ...(params.category && { category: params.category }),
    ...(minPrice !== undefined && { minPrice }),
    ...(maxPrice !== undefined && { maxPrice }),
    ...(page !== undefined && { page }),
    ...(limit !== undefined && { limit }),
  };
}
