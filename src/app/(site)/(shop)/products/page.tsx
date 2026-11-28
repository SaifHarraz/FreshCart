import { Suspense } from "react";

import ProductPageHeader from "@/features/products/components/ProductPageHeader/ProductPageHeader";
import ProductsGridContent from "@/features/products/components/ProductsGridContent/ProductsGridContent";
import ProductsGridSkeleton from "@/features/products/components/ProductsGridSkeleton/ProductsGridSkeleton";

type ProductsPageProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default function Page({ searchParams }: ProductsPageProps) {
  return (
    <>
      <ProductPageHeader />

      <Suspense fallback={<ProductsGridSkeleton />}>
        <ProductsGridContent searchParams={searchParams} />
      </Suspense>
    </>
  );
}