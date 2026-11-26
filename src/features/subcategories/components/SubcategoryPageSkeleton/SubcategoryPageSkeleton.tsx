export default function SubcategoryPageSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading subcategories">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="min-h-[120px] animate-pulse rounded-2xl border border-gray-100 bg-gray-200"
          />
        ))}
      </div>
    </div>
  );
}