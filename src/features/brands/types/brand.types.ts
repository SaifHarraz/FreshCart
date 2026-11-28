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
  id: string;
  name: string;
  logo: string;
}

export interface BrandGridProps {
  brands: Brand[];
}