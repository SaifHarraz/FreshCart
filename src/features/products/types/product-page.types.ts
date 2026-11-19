import type { Product } from "./product.types";
export interface ProductsResultsCountProps {
  total: number;
}

export interface ProductGalleryProps {
  product: Pick<Product, "title" | "imageCover" | "images">;
}