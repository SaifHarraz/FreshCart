import type { Product } from "./product.types";
export interface ProductsResultsCountProps {
  total: number;
}

export interface ProductGalleryProps {
  product: Pick<Product, "title" | "imageCover" | "images">;
}
export interface ProductInfoProps {
  product: Pick<
    Product,
    | "title"
    | "description"
    | "price"
    | "priceAfterDiscount"
    | "quantity"
    | "ratingsAverage"
    | "ratingsQuantity" 
    | "category"
    | "brand"
  >;
}
export interface ProductBreadcrumbProps {
  product: Pick<Product, "title" | "category" | "subcategory">;
}