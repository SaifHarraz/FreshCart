import { SearchResultsToolbarProps } from "../../types/search-page.types";
import SortSelect from "../SortSelect/SortSelect";



export default function SearchResultsToolbar({
  keyword,
  total,
  sort,
  brand,
  category,
  categoryIn,
  minPrice,
  maxPrice,
}: SearchResultsToolbarProps) {
  return (
    <div className="flex flex-col justify-between gap-4 border-b border-[#E5E7EB] pb-5 sm:flex-row sm:items-center">
      <div>
        <h2 className="text-base leading-6 font-semibold text-[#1E2939]">
          {keyword ? `Results for "${keyword}"` : "All Products"}
        </h2>

        <p className="mt-1 text-sm leading-5 text-[#6A7282]">
          Found {total} products
        </p>
      </div>

      <form
        action="/search"
        method="GET"
        className="flex items-center gap-3"
      >
        {keyword && (
          <input type="hidden" name="keyword" value={keyword} />
        )}

        {brand && (
          <input type="hidden" name="brand" value={brand} />
        )}

        {category && (
          <input type="hidden" name="category" value={category} />
        )}

        {categoryIn && (
          <input type="hidden" name="categoryIn" value={categoryIn} />
        )}

        {minPrice !== undefined && (
          <input type="hidden" name="minPrice" value={minPrice} />
        )}

        {maxPrice !== undefined && (
          <input type="hidden" name="maxPrice" value={maxPrice} />
        )}

        <label
          htmlFor="search-sort"
          className="shrink-0 text-sm font-medium text-[#4A5565]"
        >
          Sort by
        </label>

        <SortSelect sort={sort} />
      </form>
    </div>
  );
}
