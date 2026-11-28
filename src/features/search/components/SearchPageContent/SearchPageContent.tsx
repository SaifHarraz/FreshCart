import SearchPageHeader from "@/features/search/components/SearchPageHeader/SearchPageHeader";
import SearchResultsToolbar from "@/features/search/components/SearchToolbar/SearchToolbar";
import ProductGrid from "@/features/products/components/ProductGrid/ProductGrid";
import ProductsPagination from "@/features/products/components/ProductsPagination/ProductsPagination";

import { getProducts } from "@/features/products/services/products.service";
import { getBrands } from "@/features/brands/services/brands.service";
import { getCategories } from "@/features/categories/services/categories.service";

import {
  parseSearchParamNumber,
  parseSearchParams,
} from "@/features/search/utils/parse-search-params";

import type { SearchPageSearchParams } from "@/features/search/types/search-page.types";

interface SearchPageContentProps {
  searchParams: Promise<SearchPageSearchParams>;
}

export default async function SearchPageContent({
  searchParams,
}: SearchPageContentProps) {
  // Runtime data access happens inside the Suspense boundary.
  const params = await searchParams;

  const keyword = params.keyword?.trim() ?? "";
  const sort = params.sort ?? "";

  const [{ data: products, results: total, metadata }, brands, categories] =
    await Promise.all([
      getProducts({ ...parseSearchParams(params), limit: 10 }),
      getBrands(),
      getCategories(),
    ]);

  // Preserve existing search, filters, and sorting when changing pages.
  const getPageHref = (page: number) => {
    const queryParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        queryParams.set(key, value);
      }
    });

    queryParams.set("page", String(page));

    return `/search?${queryParams.toString()}`;
  };

  const brandName = brands.find((item) => item._id === params.brand)?.name;

  const categoryName = categories.find(
    (item) => item._id === params.category,
  )?.name;

  return (
    <>
      <SearchPageHeader
        keyword={keyword}
        total={total}
        brandName={brandName}
        categoryName={categoryName}
      />

      <section className="mx-auto w-full max-w-[1536px] px-4 py-8 md:py-10">
        <SearchResultsToolbar
          keyword={keyword}
          sort={sort}
          brand={params.brand}
          category={params.category}
          minPrice={parseSearchParamNumber(params.minPrice)}
          maxPrice={parseSearchParamNumber(params.maxPrice)}
          brands={brands}
          categories={categories}
        />

        <div className="mt-6">
          {products.length > 0 ? (
            <>
              <ProductGrid products={products} />

              <div className="mt-10">
                <ProductsPagination
                  currentPage={metadata.currentPage}
                  totalPages={metadata.numberOfPages}
                  getPageHref={getPageHref}
                />
              </div>
            </>
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