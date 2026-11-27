
type BrandOption = {
  id: string;
  label: string;
};

type BrandFilterSectionProps = {
  options: BrandOption[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
};

export default function BrandFilterSection({
  options,
  selectedValues,
  onChange,
}: BrandFilterSectionProps) {
  function handleToggle(brandId: string) {
    const isSelected = selectedValues.includes(brandId);

    onChange(
      isSelected
        ? selectedValues.filter((id) => id !== brandId)
        : [...selectedValues, brandId],
    );
  }

  return (
    <fieldset className="space-y-3">
      <legend className="text-sm font-semibold">Brand</legend>

      <div className="space-y-3">
        {options.map((brand) => (
          <label
            key={brand.id}
            className="flex cursor-pointer items-center gap-3 text-sm"
          >
            <input
              type="checkbox"
              checked={selectedValues.includes(brand.id)}
              onChange={() => handleToggle(brand.id)}
              className="size-4 accent-primary"
            />

            <span>{brand.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
