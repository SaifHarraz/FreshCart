import type { ListingResponse } from "@/types/listing";

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export type CategoriesResponse = ListingResponse<Category>;