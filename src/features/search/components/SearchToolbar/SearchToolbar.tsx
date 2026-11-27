import {
  Grid2X2,
  List,
  SlidersHorizontal,
} from "lucide-react";

type ViewMode = "grid" | "list";

export type SortOption =
  | "relevance"
  | "price-asc"
  | "price-desc"
  | "newest"
  | "top-rated";

type SearchToolbarProps = {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  onOpenFilters: () => void;
  sort: SortOption;
  onSortChange: (sort: SortOption) => void;
};

export default function SearchToolbar({
  viewMode,
  onViewModeChange,
  onOpenFilters,
  sort,
  onSortChange,
}: SearchToolbarProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      {/* View and Filters */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-1 rounded-lg border border-[#E5E7EB] p-1">
          <button
            type="button"
            aria-label="Grid view"
            aria-pressed={viewMode === "grid"}
            onClick={() => onViewModeChange("grid")}
            className={`flex size-9 items-center justify-center rounded-md transition-colors ${
              viewMode === "grid"
                ? "bg-[#16A34A] text-white"
                : "text-[#6A7282] hover:bg-[#F3F4F6]"
            }`}
          >
            <Grid2X2 className="size-4" />
          </button>

          <button
            type="button"
            aria-label="List view"
            aria-pressed={viewMode === "list"}
            onClick={() => onViewModeChange("list")}
            className={`flex size-9 items-center justify-center rounded-md transition-colors ${
              viewMode === "list"
                ? "bg-[#16A34A] text-white"
                : "text-[#6A7282] hover:bg-[#F3F4F6]"
            }`}
          >
            <List className="size-4" />
          </button>
        </div>

        <button
          type="button"
          onClick={onOpenFilters}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-[#D1D5DC] px-4 text-sm font-medium text-[#364153] transition-colors hover:border-[#16A34A] hover:text-[#16A34A]"
        >
          <SlidersHorizontal className="size-4" />
          Filters
        </button>
      </div>

      {/* Sorting */}
      <div className="flex items-center justify-between gap-3 sm:justify-end">
        <label
          htmlFor="search-sort"
          className="text-sm text-[#6A7282]"
        >
          Sort by:
        </label>

        <select
          id="search-sort"
          value={sort}
          onChange={(event) =>
            onSortChange(event.target.value as SortOption)
          }
          className="h-10 min-w-40 rounded-lg border border-[#D1D5DC] bg-white px-3 text-sm text-[#364153] outline-none focus:border-[#16A34A]"
        >
          <option value="relevance">Relevance</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="newest">Newest</option>
          <option value="top-rated">Top Rated</option>
        </select>
      </div>
    </div>
  );
}