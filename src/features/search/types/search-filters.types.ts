
import type { Category } from "@/features/categories/types/category.types";
import type { Brand } from "@/features/brands/types/brand.types";

export type FilterOption = Pick<Category | Brand, "_id" | "name">;

export type SearchFilters = {
  minPrice: string;
  maxPrice: string;
  categories: string[];
  brands: string[];
  rating: number | null;
};

export type SearchFiltersDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  categories: Category[];
  brands: Brand[];
  initialFilters: SearchFilters;
  onApply: (filters: SearchFilters) => void;
};

export const emptyFilters: SearchFilters = {
  minPrice: "",
  maxPrice: "",
  categories: [],
  brands: [],
  rating: null,
};
