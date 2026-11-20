import type { Product } from "./product.types";
import type { ProductReview } from "./product-reviews.types";

export interface ProductTabsProps {
  product: Product;
  reviews: ProductReview[];
  reviewsCount: number;
}