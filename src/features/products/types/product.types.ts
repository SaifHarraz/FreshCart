import type { ListingResponse } from "@/types/listing";

export interface Product {
  _id: string;
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  quantity: number;
  sold: number;
  imageCover: string;
  priceAfterDiscount?: number;
  subcategory: ProductSubcategory[];
  images: string[];
  ratingsAverage: number;
  ratingsQuantity: number;
  category: {
    _id: string;
    name: string;
    slug: string;
    image: string;
  };
  brand: {
    _id: string;
    name: string;
    slug: string;
    image: string;
  };
}

export interface ProductSubcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}
export type ProductsResponse = ListingResponse<Product>;