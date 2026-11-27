
import SearchPageHeader from "@/features/search/components/SearchPageHeader/SearchPageHeader";
import SearchResultsToolbar from "@/features/search/components/SearchToolbar/SearchToolbar";
import ProductGrid from "@/features/products/components/ProductGrid/ProductGrid";
import { getProducts } from "@/features/products/services/products.service";
import { Search } from 'lucide-react';

interface SearchPageProps {
  searchParams: Promise<{
    keyword?: string;
    sort?: string;
  }>;
}

export default async function SearchPage({
  searchParams,
}: SearchPageProps) {
  const params = await searchParams;

  const keyword = params.keyword?.trim() ?? "";
  const sort = params.sort ?? "";

  const { data: products, results: total } = await getProducts({
    ...(keyword && { keyword }),
    ...(sort && { sort }),
  });

  return (
    <>
      <SearchPageHeader keyword={keyword} />

      <section className="mx-auto w-full max-w-[1536px] px-4 py-8 md:py-10">
        <SearchResultsToolbar
          keyword={keyword}
          total={total}
          sort={sort}
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
                Try searching with a different keyword.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
