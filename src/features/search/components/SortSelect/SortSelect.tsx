
"use client";

interface SortSelectProps {
  sort: string;
}

export default function SortSelect({ sort }: SortSelectProps) {
  return (
    <select
      id="search-sort"
      name="sort"
      defaultValue={sort}
      onChange={(event) => {
        event.currentTarget.form?.requestSubmit();
      }}
      className="h-10 min-w-40 rounded-lg border border-[#E5E7EB] bg-white px-3 text-sm text-[#1E2939] outline-none transition-colors focus:border-[#16A34A] focus:ring-2 focus:ring-[#16A34A]/10"
    >
      <option value="">Recommended</option>
      <option value="price">Price: Low to High</option>
      <option value="-price">Price: High to Low</option>
      <option value="-ratingsAverage">Top Rated</option>
      <option value="-createdAt">Newest</option>
    </select>
  );
}
