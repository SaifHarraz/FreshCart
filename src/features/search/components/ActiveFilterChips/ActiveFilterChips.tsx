
import { X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type ActiveFilter = {
  id: string;
  label: string;
};

type ActiveFilterChipsProps = {
  filters: ActiveFilter[];
  onRemove: (id: string) => void;
  onClearAll: () => void;
};

export default function ActiveFilterChips({
  filters,
  onRemove,
  onClearAll,
}: ActiveFilterChipsProps) {
  if (filters.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {filters.map((filter) => (
        <Badge
          key={filter.id}
          variant="outline"
          className="h-8 gap-2 rounded-full border-[#D1D5DC] bg-white py-1 pr-2 pl-3 text-sm font-normal text-[#364153]"
        >
          {filter.label}

          <button
            type="button"
            aria-label={`Remove ${filter.label} filter`}
            onClick={() => onRemove(filter.id)}
            className="rounded-full cursor-pointer p-0.5 text-[#6A7282] transition-colors hover:bg-[#E5E7EB] hover:text-[#364153]"
          >
            <X className="size-3.5" />
          </button>
        </Badge>
      ))}

      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={onClearAll}
        className="h-8 px-2 text-sm font-medium text-[#16A34A] hover:text-[#15803D]"
      >
        Clear All
      </Button>
    </div>
  );
}
