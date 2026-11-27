import { SearchResultsToolbarProps } from "../../types/search-page.types";

export default function SearchResultsToolbar({
  keyword,
  total,
  sort,
}: SearchResultsToolbarProps) {
  return (
    <div className="flex flex-col justify-between gap-4 border-b border-[#E5E7EB] pb-5 sm:flex-row sm:items-center">
      <div>
        <h2 className="text-base leading-6 font-semibold text-[#1E2939]">
          {keyword
            ? `Results for "${keyword}"`
            : "All Products"}
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
          <input
            type="hidden"
            name="keyword"
            value={keyword}
          />
        )}

        <label
          htmlFor="search-sort"
          className="shrink-0 text-sm font-medium text-[#4A5565]"
        >
          Sort by
        </label>

        <select
          id="search-sort"
          name="sort"
          defaultValue={sort}
          className="h-10 min-w-40 rounded-lg border border-[#E5E7EB] bg-white px-3 text-sm text-[#1E2939] outline-none transition-colors focus:border-[#16A34A] focus:ring-2 focus:ring-[#16A34A]/10"
        >
          <option value="">Recommended</option>
          <option value="price">Price: Low to High</option>
          <option value="-price">Price: High to Low</option>
          <option value="-ratingsAverage">Top Rated</option>
          <option value="-createdAt">Newest</option>
        </select>

        <button
          type="submit"
          className="h-10 rounded-lg bg-[#16A34A] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#15803D]"
        >
          Apply
        </button>
      </form>
    </div>
  );
}
