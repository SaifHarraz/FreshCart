"use client";

import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch?.(query.trim());
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="hidden max-w-2xl flex-1 lg:flex"
      role="search"
    >
      <div className="relative w-full">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search for products, brands and more..."
          aria-label="Search products"
          className="w-full rounded-full border border-gray-200 bg-gray-50/50 py-3 pr-14 pl-5 text-sm transition-all placeholder:text-gray-400 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
        />

        <button
          type="submit"
          aria-label="Submit search"
          className="absolute top-1/2 right-1.5 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-primary-600 text-white transition-colors hover:bg-primary-700"
        >
          <Search className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}