export interface SearchPageHeaderProps {
  keyword: string;
}

export interface SearchResultsToolbarProps {
  keyword: string;
  total: number;
  sort: string;
  brand?: string;
  category?: string;
  categoryIn?: string;
  minPrice?: number;
  maxPrice?: number;
}

export interface SearchPageSearchParams {
  keyword?: string;
  sort?: string;
  brand?: string;
  category?: string;
  categoryIn?: string;
  minPrice?: string;
  maxPrice?: string;
  page?: string;
  limit?: string;
}
