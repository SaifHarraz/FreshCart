
type CategoryOption = {
  id: string;
  label: string;
};

type CategoryFilterSectionProps = {
  options: CategoryOption[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
};

export default function CategoryFilterSection({
  options,
  selectedValues,
  onChange,
}: CategoryFilterSectionProps) {
  function handleToggle(categoryId: string) {
    const isSelected = selectedValues.includes(categoryId);

    onChange(
      isSelected
        ? selectedValues.filter((id) => id !== categoryId)
        : [...selectedValues, categoryId],
    );
  }

  return (
    <fieldset className="space-y-3">
      <legend className="text-sm font-semibold">Category</legend>

      <div className="space-y-3">
        {options.map((category) => (
          <label
            key={category.id}
            className="flex cursor-pointer items-center gap-3 text-sm"
          >
            <input
              type="checkbox"
              checked={selectedValues.includes(category.id)}
              onChange={() => handleToggle(category.id)}
              className="size-4 accent-primary"
            />

            <span>{category.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
