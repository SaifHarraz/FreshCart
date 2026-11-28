
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

const sortOptions = [
  { label: "Recommended", value: "recommended" },
  { label: "Price: Low to High", value: "price" },
  { label: "Price: High to Low", value: "-price" },
  { label: "Top Rated", value: "-ratingsAverage" },
  { label: "Newest", value: "-createdAt" },
];

export default function SortSelect({
  sort,
  onSortChange,
}: SortSelectProps) {
  return (
    <Select
      items={sortOptions}
      value={sort || "recommended"}
      onValueChange={(value) =>
        onSortChange(!value || value === "recommended" ? "" : value)
      }
    >
      <SelectTrigger id="search-sort" className="h-10 min-w-40 cursor-pointer">
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        {sortOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
