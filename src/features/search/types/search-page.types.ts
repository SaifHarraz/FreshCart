
import type { Brand } from "@/features/brands/types/brand.types";
import type { Category } from "@/features/categories/types/category.types";

export interface SearchPageHeaderProps {
  keyword: string;
  total: number;
  brandName?: string;
categoryName?: string;
}

export interface SearchResultsToolbarProps {
  keyword: string;
  sort: string;
  brand?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  brands: Brand[];
  categories: Category[];
}

export interface SearchPageSearchParams {
  keyword?: string;
  sort?: string;
  brand?: string;
  category?: string;
  minPrice?: string;
  maxPrice?: string;
  page?: string;
  limit?: string;
}
