
import type { GetProductsParams } from "@/features/products/types/product-query.types";
import type { SearchPageSearchParams } from "../types/search-page.types";

function parseOptionalNumber(value?: string): number | undefined {
  if (!value?.trim()) return undefined;

  const parsed = Number(value);

  return Number.isFinite(parsed) ? parsed : undefined;
}

export function parseSearchParams(
  params: SearchPageSearchParams
): GetProductsParams {
  const minPrice = parseOptionalNumber(params.minPrice);
  const maxPrice = parseOptionalNumber(params.maxPrice);
  const page = parseOptionalNumber(params.page);
  const limit = parseOptionalNumber(params.limit);

  return {
    ...(params.keyword?.trim() && {
      keyword: params.keyword.trim(),
    }),
    ...(params.sort && { sort: params.sort }),
    ...(params.brand && { brand: params.brand }),
    ...(params.category && { category: params.category }),
    ...(params.categoryIn && { categoryIn: params.categoryIn }),
    ...(minPrice !== undefined && { minPrice }),
    ...(maxPrice !== undefined && { maxPrice }),
    ...(page !== undefined && { page }),
    ...(limit !== undefined && { limit }),
  };
}
