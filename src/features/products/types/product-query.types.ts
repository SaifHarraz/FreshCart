export type GetProductsParams = {
  keyword?: string;
  page?: number;
  limit?: number;
  sort?: string;
  brand?: string;
  category?: string;
  categoryIn?: string;
  minPrice?: number;
  maxPrice?: number;
};