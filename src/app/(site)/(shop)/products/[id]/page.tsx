import { Suspense } from "react";

import ProductDetailsSkeleton from "@/features/products/components/ProductDetailsSkeleton/ProductDetailsSkeleton";
import ProductContent, { ProductPageProps } from "@/features/products/components/ProductContent/ProductContent";

export default function ProductPage({
  params,
}: ProductPageProps) {
  return (
    <main className="mx-auto w-full max-w-[1536px] px-4 py-8">
      <Suspense fallback={<ProductDetailsSkeleton />}>
        <ProductContent params={params} />
      </Suspense>
    </main>
  );
}
