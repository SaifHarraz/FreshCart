import type { ListingResponse } from "@/types/listing";

export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export type SubcategoriesResponse = ListingResponse<Subcategory>;