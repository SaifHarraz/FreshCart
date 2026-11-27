import { X } from "lucide-react";

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
        <span
          key={filter.id}
          className="inline-flex h-8 items-center gap-2 rounded-full border border-[#D1D5DC] bg-white py-1 pr-2 pl-3 text-sm text-[#364153]"
        >
          {filter.label}

          <button
            type="button"
            aria-label={`Remove ${filter.label} filter`}
            onClick={() => onRemove(filter.id)}
            className="rounded-full p-0.5 text-[#6A7282] transition-colors hover:bg-[#E5E7EB] hover:text-[#364153]"
          >
            <X className="size-3.5" />
          </button>
        </span>
      ))}

      <button
        type="button"
        onClick={onClearAll}
        className="h-8 px-2 text-sm font-medium text-[#16A34A] transition-colors hover:text-[#15803D]"
      >
        Clear All
      </button>
    </div>
  );
}