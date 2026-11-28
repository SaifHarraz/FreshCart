
"use client";

import { useForm } from "react-hook-form";
import { Search, X } from "lucide-react";

interface SearchFormValues {
  query: string;
}

interface SearchInputProps {
  initialValue: string;
  onSearch?: (query: string) => void;
}

export default function SearchInput({
  initialValue,
  onSearch,
}: SearchInputProps) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
  } = useForm<SearchFormValues>({
    defaultValues: {
      query: initialValue,
    },
  });

  const query = watch("query");

  function onSubmit(data: SearchFormValues) {
    onSearch?.(data.query.trim());
  }

  function handleClear() {
    setValue("query", "", {
      shouldDirty: true,
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="hidden max-w-2xl flex-1 lg:flex"
      role="search"
    >
      <div className="relative w-full">
        <input
          type="search"
          {...register("query")}
          placeholder="Search for products, brands and more..."
          aria-label="Search products"
          className="w-full rounded-full border  border-gray-200 bg-gray-50/50 py-3 pr-14 pl-5 text-sm transition-all placeholder:text-gray-400 focus:border-secondary0 focus:bg-white focus:ring-2 focus:ring-secondary0/20 focus:outline-none"
        />

        {/* {query && (
          <button
            type="button"
            aria-label="Clear search input"
            onClick={handleClear}
            className="absolute top-1/2 right-12 flex size-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-700"
          >
            <X className="size-4" />
          </button>
        )} */}

        <button
          type="submit"
          aria-label="Submit search"
          className="absolute top-1/2 right-1.5 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-hover"
        >
          <Search className="size-4" />
        </button>
      </div>
    </form>
  );
}
