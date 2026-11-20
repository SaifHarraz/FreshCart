import type { Product } from "./product.types";
import type {
  ProductReview,
  ProductReviewsResponse,
} from "./product-reviews.types";

export interface ProductTabsProps {
  product: Product;
  reviewsResponse: ProductReviewsResponse;
}