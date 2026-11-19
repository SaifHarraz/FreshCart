import ProductsResultsCount from "@/features/products/components/ProductsResultsCount/ProductsResultsCount";
import ProductGrid from "@/features/products/components/ProductGrid/ProductGrid";
import { getProducts } from "@/features/products/services/products.service";
import ProductPageHeader from "@/features/products/components/ProductPageHeader/ProductPageHeader";

export default async function Page() {
  const { data: products, results: total } = await getProducts();

  return (
    <>
      <ProductPageHeader />

      <main className="mx-auto w-full max-w-[1536px] px-4">
        <div className="pt-8">
          <ProductsResultsCount total={total} />
        </div>

        <div className="mt-6">
          <ProductGrid products={products} />
        </div>
      </main>
    </>
  );
}