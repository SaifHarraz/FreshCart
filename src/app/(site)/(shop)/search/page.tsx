
import SearchPageHeader from "@/features/search/components/SearchPageHeader/SearchPageHeader";
import SearchResultsToolbar from "@/features/search/components/SearchToolbar/SearchToolbar";
import ProductGrid from "@/features/products/components/ProductGrid/ProductGrid";

import { getProducts } from "@/features/products/services/products.service";
import { getBrands } from "@/features/brands/services/brands.service";
import { getCategories } from "@/features/categories/services/categories.service";

import {
  parseSearchParamNumber,
  parseSearchParams,
} from "@/features/search/utils/parse-search-params";

import type { SearchPageSearchParams } from "@/features/search/types/search-page.types";

interface SearchPageProps {
  searchParams: Promise<SearchPageSearchParams>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;

  const keyword = params.keyword?.trim() ?? "";
  const sort = params.sort ?? "";

  const [
    { data: products, results: total },
    brands,
    categories,
  ] = await Promise.all([
    getProducts(parseSearchParams(params)),
    getBrands(),
    getCategories(),
  ]);

  return (
    <>
      <SearchPageHeader keyword={keyword} total={total} />

      <section className="mx-auto w-full max-w-[1536px] px-4 py-8 md:py-10">
        <SearchResultsToolbar
          keyword={keyword}
          total={total}
          sort={sort}
          brand={params.brand}
          category={params.category}
          categoryIn={params.categoryIn}
          minPrice={parseSearchParamNumber(params.minPrice)}
          maxPrice={parseSearchParamNumber(params.maxPrice)}
          brands={brands}
          categories={categories}
        />

        <div className="mt-6">
          {products.length > 0 ? (
            <ProductGrid products={products} />
          ) : (
            <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
              <h2 className="text-xl font-semibold text-[#1E2939]">
                No products found
              </h2>

              <p className="mt-2 text-sm text-[#6A7282]">
                Try adjusting your search or filters.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
