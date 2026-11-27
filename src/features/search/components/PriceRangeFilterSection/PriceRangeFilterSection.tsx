
type PriceRangeFilterSectionProps = {
  minPrice: string;
  maxPrice: string;
  onChange: (range: { minPrice: string; maxPrice: string }) => void;
};

export default function PriceRangeFilterSection({
  minPrice,
  maxPrice,
  onChange,
}: PriceRangeFilterSectionProps) {
  return (
    <fieldset className="space-y-3">
      <legend className="text-sm font-semibold">Price Range</legend>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <label htmlFor="min-price" className="text-xs text-muted-foreground">
            Minimum price
          </label>

          <input
            id="min-price"
            type="number"
            min="0"
            placeholder="Min"
            value={minPrice}
            onChange={(e) =>
              onChange({ minPrice: e.target.value, maxPrice })
            }
            className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="max-price" className="text-xs text-muted-foreground">
            Maximum price
          </label>

          <input
            id="max-price"
            type="number"
            min="0"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) =>
              onChange({ minPrice, maxPrice: e.target.value })
            }
            className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
      </div>

      <p className="text-xs text-muted-foreground">Prices are in EGP.</p>
    </fieldset>
  );
}
