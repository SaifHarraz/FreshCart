
"use client";

import { useEffect, useState } from "react";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

export type FilterOption = {
  _id: string;
  name: string;
};

export type SearchFilters = {
  minPrice: string;
  maxPrice: string;
  category: string;
  brand: string;
};

type SearchFiltersDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  categories: FilterOption[];
  brands: FilterOption[];
  initialFilters: SearchFilters;
  onApply: (filters: SearchFilters) => void;
};

export const emptyFilters: SearchFilters = {
  minPrice: "",
  maxPrice: "",
  category: "",
  brand: "",
};

export default function SearchFiltersDrawer({
  open,
  onOpenChange,
  categories,
  brands,
  initialFilters,
  onApply,
}: SearchFiltersDrawerProps) {
  const [draft, setDraft] = useState(initialFilters);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateViewport = () => setIsMobile(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  function handleOpenChange(nextOpen: boolean) {
    if (nextOpen) {
      setDraft(initialFilters);
    }

    onOpenChange(nextOpen);
  }

  function updateFilter<K extends keyof SearchFilters>(
    key: K,
    value: SearchFilters[K],
  ) {
    setDraft((current) => ({ ...current, [key]: value }));
  }

  function handleApply() {
    onApply(draft);
    onOpenChange(false);
  }

  function handleReset() {
    setDraft(emptyFilters);
  }

  return (
    <Drawer
      open={open}
      onOpenChange={handleOpenChange}
      swipeDirection={isMobile ? "down" : "left"}
      snapPoints={isMobile ? [0.5, 0.9] : undefined}
      showSwipeHandle={isMobile}
    >
      <DrawerContent
        className={
          isMobile
            ? "h-auto max-h-[90dvh] w-full"
            : "h-full w-[400px] max-w-[90vw]"
        }
      >
        <DrawerHeader className="border-b px-6 pb-4 text-left">
          <DrawerTitle className="text-xl">Filters</DrawerTitle>
          <DrawerDescription>
            Refine your search to find exactly what you need.
          </DrawerDescription>
        </DrawerHeader>

        <div className="flex-1 space-y-6 overflow-y-auto px-6 py-5">
          <section className="space-y-3">
            <h3 className="font-semibold text-[#364153]">Price range</h3>

            <div className="grid grid-cols-2 gap-3">
              <input
                type="number"
                min="0"
                placeholder="Min price"
                value={draft.minPrice}
                onChange={(e) => updateFilter("minPrice", e.target.value)}
                className="h-11 min-w-0 rounded-lg border px-3 outline-none focus:border-[#16A34A]"
              />

              <input
                type="number"
                min="0"
                placeholder="Max price"
                value={draft.maxPrice}
                onChange={(e) => updateFilter("maxPrice", e.target.value)}
                className="h-11 min-w-0 rounded-lg border px-3 outline-none focus:border-[#16A34A]"
              />
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="font-semibold text-[#364153]">Category</h3>

            <select
              value={draft.category}
              onChange={(e) => updateFilter("category", e.target.value)}
              className="h-11 cursor-pointer w-full rounded-lg border bg-white px-3 outline-none focus:border-[#16A34A]"
            >
              <option value="">All categories</option>

              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </section>

          <section className="space-y-3">
            <h3 className="font-semibold text-[#364153]">Brand</h3>

            <select
              value={draft.brand}
              onChange={(e) => updateFilter("brand", e.target.value)}
              className="h-11 w-full cursor-pointer rounded-lg border bg-white px-3 outline-none focus:border-[#16A34A]"
            >
              <option value="">All brands</option>

              {brands.map((brand) => (
                <option key={brand._id} value={brand._id}>
                  {brand.name}
                </option>
              ))}
            </select>
          </section>
        </div>

        <DrawerFooter className="flex-row border-t px-6 py-4">
          <button
            type="button"
            onClick={handleReset}
            className="h-11 cursor-pointer flex-1 rounded-lg border font-medium"
          >
            Reset
          </button>

          <button
            type="button"
            onClick={handleApply}
            className="h-11 cursor-pointer flex-1 rounded-lg bg-[#16A34A] font-semibold text-white hover:bg-[#15803D]"
          >
            Apply Filters
          </button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
