"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";

import type { SearchResultsToolbarProps } from "../../types/search-page.types";
import ActiveFilterChips from "../ActiveFilterChips/ActiveFilterChips";
import SortSelect from "../SortSelect/SortSelect";
import { emptyFilters, SearchFilters } from "../../types/search-filters.types";
import SearchFiltersDrawer from "../SearchFiltersDrawer/SearchFiltersDrawer";

export default function SearchResultsToolbar({
  keyword,
  brand,
  category,
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
       <div className="grid grid-cols-1 gap-3 border-b border-[#E5E7EB] pb-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
  {/* Filters and Clear Search */}
  <div className="flex min-w-0 flex-wrap items-center gap-2">
    <Button
      type="button"
      variant="outline"
      size="lg"
      onClick={() => setIsDrawerOpen(true)}
      className="shrink-0 cursor-pointer gap-2 whitespace-nowrap"
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
        className="shrink-0 cursor-pointer gap-1.5 whitespace-nowrap text-[#6A7282] hover:text-[#16A34A]"
      >
        <Search className="size-4" />
        Clear Search
      </Button>
    )}
  </div>

  {/* Sort */}
  <div className="flex shrink-0 items-center justify-end gap-2">
    <label
      htmlFor="search-sort"
      className="hidden text-sm font-medium text-[#4A5565] sm:block"
    >
      Sort by
    </label>

    <SortSelect sort={sort} onSortChange={handleSortChange} />
  </div>

  {/* Active Filters */}
  <div className="min-w-0 sm:col-span-2">
    <ActiveFilterChips
      filters={activeFilters}
      onRemove={handleRemoveFilter}
      onClearAll={handleClearAll}
    />
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