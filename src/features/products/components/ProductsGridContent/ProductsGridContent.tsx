import ProductsResultsCount from "@/features/products/components/ProductsResultsCount/ProductsResultsCount";
import ProductGrid from "@/features/products/components/ProductGrid/ProductGrid";
import ProductsPagination from "@/features/products/components/ProductsPagination/ProductsPagination";
import { getProducts } from "@/features/products/services/products.service";

type ProductsContentProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function ProductsContent({
  searchParams,
}: ProductsContentProps) {
  const { page } = await searchParams;

  const requestedPage = Math.max(1, Number(page) || 1);

  const {
    data: products,
    results: total,
    metadata,
  } = await getProducts({ page: requestedPage, limit: 10 });

  return (
    <main className="mx-auto w-full max-w-[1536px] px-4">
      <div className="pt-8">
        <ProductsResultsCount total={total} />
      </div>

      <div className="mt-6">
        <ProductGrid products={products} />
      </div>

      <div className="mt-10 mb-12">
        <ProductsPagination
          currentPage={metadata.currentPage}
          totalPages={metadata.numberOfPages}
          getPageHref={(page) => `/products?page=${page}`}
        />
      </div>
    </main>
  );
}