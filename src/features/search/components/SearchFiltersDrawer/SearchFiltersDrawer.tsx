"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  emptyFilters,
  type SearchFilters,
  type SearchFiltersDrawerProps,
} from "@/features/search/types/search-filters.types";
import { searchFiltersSchema } from "../../schema/search-filters.schema";

export default function SearchFiltersDrawer({
  open,
  onOpenChange,
  categories,
  brands,
  initialFilters,
  onApply,
}: SearchFiltersDrawerProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SearchFilters>({
    resolver: zodResolver(searchFiltersSchema),
    defaultValues: initialFilters,
  });

  const [isMobile, setIsMobile] = useState(false);

  // Keep form values synchronized with the applied filters.
  useEffect(() => {
    if (open) {
      reset(initialFilters);
    }
  }, [open, initialFilters, reset]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateViewport = () => setIsMobile(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  function handleApply(values: SearchFilters) {
    onApply(values);
    onOpenChange(false);
  }

  function handleReset() {
    reset(emptyFilters);
  }

  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
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
        <form
          onSubmit={handleSubmit(handleApply)}
          className="flex min-h-0 flex-1 flex-col"
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
                <div>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    placeholder="Min price"
                    {...register("minPrice")}
                    className="h-11 w-full min-w-0 rounded-lg border px-3 outline-none focus:border-[#16A34A]"
                  />
                  {errors.minPrice && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.minPrice.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    placeholder="Max price"
                    {...register("maxPrice")}
                    className="h-11 w-full min-w-0 rounded-lg border px-3 outline-none focus:border-[#16A34A]"
                  />
                  {errors.maxPrice && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.maxPrice.message}
                    </p>
                  )}
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h3 className="font-semibold text-[#364153]">Category</h3>

              <select
                {...register("category")}
                className="h-11 w-full cursor-pointer rounded-lg border bg-white px-3 outline-none focus:border-[#16A34A]"
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
                {...register("brand")}
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
              className="h-11 flex-1 cursor-pointer rounded-lg border font-medium"
            >
              Reset
            </button>

            <button
              type="submit"
              className="h-11 flex-1 cursor-pointer rounded-lg bg-[#16A34A] font-semibold text-white hover:bg-[#15803D]"
            >
              Apply Filters
            </button>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );
}
