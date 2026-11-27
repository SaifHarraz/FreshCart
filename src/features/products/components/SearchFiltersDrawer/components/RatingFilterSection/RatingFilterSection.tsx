
type RatingFilterSectionProps = {
  selectedValue: number | null;
  onChange: (value: number | null) => void;
};

const ratingOptions = [4, 3, 2, 1];

export default function RatingFilterSection({
  selectedValue,
  onChange,
}: RatingFilterSectionProps) {
  return (
    <fieldset className="space-y-3">
      <legend className="text-sm font-semibold">Customer Rating</legend>

      <div className="space-y-3">
        {ratingOptions.map((rating) => (
          <label
            key={rating}
            className="flex cursor-pointer items-center gap-3 text-sm"
          >
            <input
              type="radio"
              name="rating"
              checked={selectedValue === rating}
              onChange={() => onChange(rating)}
              className="size-4 accent-primary"
            />

            <span>{rating}+ Stars</span>
          </label>
        ))}
      </div>

      {selectedValue !== null && (
        <button
          type="button"
          onClick={() => onChange(null)}
          className="text-xs text-muted-foreground underline underline-offset-4"
        >
          Clear rating
        </button>
      )}
    </fieldset>
  );
}
