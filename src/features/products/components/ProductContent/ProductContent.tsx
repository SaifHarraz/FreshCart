
import { notFound } from "next/navigation";

import ProductGallery from "@/features/products/components/ProductGallery/ProductGallery";
import ProductInfo from "@/features/products/components/ProductInfo/ProductInfo";
import ProductBreadcrumb from "@/features/products/components/ProductBreadcrumb/ProductBreadcrumb";

import { getProductById } from "@/features/products/services/products.service";

export type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductContent({
  params,
}: ProductPageProps) {
  // 1. Resolve the dynamic route parameter
  const { id } = await params;

  // 2. Fetch the requested product
  const product = await getProductById(id);

  // 3. Handle invalid product IDs
  if (!product) {
    notFound();
  }

  // 4. Render the product
  return (
    <>
      <div className="mb-4">
        <ProductBreadcrumb product={product} />
      </div>

      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[376px_minmax(0,1fr)]">
        <ProductGallery product={product} />
        <ProductInfo product={product} />
      </div>
    </>
  );
}
