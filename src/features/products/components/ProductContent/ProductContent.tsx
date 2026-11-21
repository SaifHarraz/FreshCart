import { notFound } from "next/navigation";
import ProductGallery from "@/features/products/components/ProductGallery/ProductGallery";
import ProductInfo from "@/features/products/components/ProductInfo/ProductInfo";
import ProductBreadcrumb from "@/features/products/components/ProductBreadcrumb/ProductBreadcrumb";
import ProductTabs from "@/features/products/components/ProductTabs/ProductTabs";
import YouMayAlsoLike from "../YouMayAlsoLike/YouMayAlsoLike";
import {
  getProductById,
  getProductReviews,
  getProducts,
} from "@/features/products/services/products.service";

import { selectRelatedProducts } from "@/features/products/utils/related-products.utils";
export type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductContent({ params }: ProductPageProps) {
 const { id } = await params;

const product = await getProductById(id);

if (!product) {
  notFound();
}

const [reviewsResponse, categoryProductsResponse] = await Promise.all([
  getProductReviews(id),
  getProducts({
    category: product.category._id,
  }),
]);

const relatedProducts = selectRelatedProducts(
  product,
  categoryProductsResponse.data
);
  return (
    <>
      <div className="mb-4">
        <ProductBreadcrumb product={product} />
      </div>

      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[376px_minmax(0,1fr)]">
        <ProductGallery product={product} />
        <ProductInfo product={product} />
      </div>
      <ProductTabs product={product} reviewsResponse={reviewsResponse} />
      <YouMayAlsoLike products={relatedProducts} />
    </>
  );
}
