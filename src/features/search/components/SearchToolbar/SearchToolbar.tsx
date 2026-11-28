"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";

import type { SearchResultsToolbarProps } from "../../types/search-page.types";
import SearchFiltersDrawer, {
  emptyFilters,
  type SearchFilters,
} from "../SearchFiltersDrawer/SearchFiltersDrawer";
import ActiveFilterChips from "../ActiveFilterChips/ActiveFilterChips";
import SortSelect from "../SortSelect/SortSelect";

export default function SearchResultsToolbar({
  keyword,
  brand,
  category,
  categoryIn,
  minPrice,
  maxPrice,
  brands,
  categories,
  sort,
}: SearchResultsToolbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function updateUrl(updates: Record<string, string | null>) {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    params.delete("page");

    const queryString = params.toString();

    router.replace(queryString ? `${pathname}?${queryString}` : pathname, {
      scroll: false,
    });
  }

  const activeFilters = [
    ...(brand
      ? [{
          id: "brand",
          label: `Brand: ${brands.find((item) => item._id === brand)?.name ?? brand}`,
        }]
      : []),
    ...(category
      ? [{
          id: "category",
          label: `Category: ${categories.find((item) => item._id === category)?.name ?? category}`,
        }]
      : []),
    ...(categoryIn
      ? [{
          id: "categoryIn",
          label: `Categories: ${categoryIn
            .split(",")
            .map((id) => categories.find((item) => item._id === id)?.name ?? id)
            .join(", ")}`,
        }]
      : []),
    ...(minPrice !== undefined
      ? [{ id: "minPrice", label: `Min: ${minPrice} EGP` }]
      : []),
    ...(maxPrice !== undefined
      ? [{ id: "maxPrice", label: `Max: ${maxPrice} EGP` }]
      : []),
  ];

  function handleApplyFilters(filters: SearchFilters) {
    updateUrl({
      brand: filters.brand || null,
      category: filters.category || null,
      categoryIn: filters.category ? null : categoryIn || null,
      minPrice: filters.minPrice || null,
      maxPrice: filters.maxPrice || null,
    });
  }

  function handleRemoveFilter(id: string) {
    updateUrl({ [id]: null });
  }

  function handleClearAll() {
    updateUrl({
      brand: null,
      category: null,
      categoryIn: null,
      minPrice: null,
      maxPrice: null,
    });
  }

  function handleSortChange(value: string) {
    updateUrl({ sort: value || null });
  }

  function handleClearSearch() {
    updateUrl({ keyword: null });
  }

  const initialFilters: SearchFilters = {
    ...emptyFilters,
    brand: brand ?? "",
    category: category ?? "",
    minPrice: minPrice?.toString() ?? "",
    maxPrice: maxPrice?.toString() ?? "",
  };

  return (
    <>
      <div className="flex flex-col gap-3 border-b border-[#E5E7EB] pb-5">
        <div className="flex flex-wrap items-center gap-3">
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={() => setIsDrawerOpen(true)}
            className="shrink-0 cursor-pointer gap-2"
          >
            <SlidersHorizontal className="size-4" />
            Filters
          </Button>

          {keyword && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleClearSearch}
              className="cursor-pointer gap-1.5 text-[#6A7282] hover:text-[#16A34A]"
            >
              <Search className="size-4" />
              Clear Search
            </Button>
          )}

          <div className="min-w-0 flex-1">
            <ActiveFilterChips
              filters={activeFilters}
              onRemove={handleRemoveFilter}
              onClearAll={handleClearAll}
            />
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <label
              htmlFor="search-sort"
              className="hidden text-sm font-medium text-[#4A5565] sm:block"
            >
              Sort by
            </label>

            <SortSelect sort={sort} onSortChange={handleSortChange} />
          </div>
        </div>
      </div>

      <SearchFiltersDrawer
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        categories={categories}
        brands={brands}
        initialFilters={initialFilters}
        onApply={handleApplyFilters}
      />
    </>
  );
}