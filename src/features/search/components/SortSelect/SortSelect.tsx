
"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SortSelectProps {
  sort: string;
  onSortChange: (value: string) => void;
}

export default function SortSelect({
  sort,
  onSortChange,
}: SortSelectProps) {
  return (
    <Select
      value={sort || "recommended"}
      onValueChange={(value) =>
  onSortChange(!value || value === "recommended" ? "" : value)
}
    >
      <SelectTrigger id="search-sort" className="h-10 min-w-40 cursor-pointer">
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="recommended">Recommended</SelectItem>
        <SelectItem value="price">Price: Low to High</SelectItem>
        <SelectItem value="-price">Price: High to Low</SelectItem>
        <SelectItem value="-ratingsAverage">Top Rated</SelectItem>
        <SelectItem value="-createdAt">Newest</SelectItem>
      </SelectContent>
    </Select>
  );
}
