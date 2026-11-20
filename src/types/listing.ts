export interface Pagination {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage?: number;
}

export interface ListingResponse<T> {
  results: number;
  metadata: Pagination;
  data: T[];
}