
export default function ProductDetailsSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading product details">
      {/* Breadcrumb placeholder */}
      <div className="mb-4 h-5 w-48 animate-pulse rounded bg-gray-200" />

      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[376px_minmax(0,1fr)]">
        {/* Gallery placeholder */}
        <div className="space-y-3">
          <div className="aspect-square animate-pulse rounded-xl bg-gray-200" />

          <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="aspect-square animate-pulse rounded-lg bg-gray-200"
              />
            ))}
          </div>
        </div>

        {/* Product information placeholder */}
        <div className="space-y-5">
          <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />
          <div className="h-8 w-3/4 animate-pulse rounded bg-gray-200" />
          <div className="h-5 w-32 animate-pulse rounded bg-gray-200" />
          <div className="h-9 w-40 animate-pulse rounded bg-gray-200" />

          <div className="space-y-2">
            <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />
          </div>

          <div className="h-12 w-full animate-pulse rounded-lg bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
