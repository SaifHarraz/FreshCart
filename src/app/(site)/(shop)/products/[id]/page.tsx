
import { notFound } from "next/navigation";

import ProductGallery from "@/features/products/components/ProductGallery/ProductGallery";
import ProductInfo from "@/features/products/components/ProductInfo/ProductInfo";
import { getProductById } from "@/features/products/services/products.service";
import ProductBreadcrumb from "@/features/products/components/ProductBreadcrumb/ProductBreadcrumb";

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-[1536px] px-4 py-8">
      <div className="mb-4">
  <ProductBreadcrumb product={product} />
</div>
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[376px_minmax(0,1fr)]">
        <ProductGallery product={product} />

        <ProductInfo product={product} />
      </div>
    </main>
  );
}
