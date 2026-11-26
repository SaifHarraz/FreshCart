
import type { ListingResponse } from "@/types/listing";

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export type BrandsResponse = ListingResponse<Brand>;

export interface BrandCardProps {
  name: string;
  logo: string;
  slug: string;
}

export interface BrandGridProps {
  brands: Brand[];
}
