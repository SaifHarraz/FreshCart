export default function ProductsSkeleton() {
  return (
    <main
      aria-busy="true"
      aria-label="Loading products"
      className="mx-auto w-full max-w-[1536px] px-4"
    >
      {/* Results count */}
      <div className="pt-8">
        <div className="h-5 w-48 animate-pulse rounded bg-gray-200" />
      </div>

      {/* Products grid */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-6">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border border-gray-200"
          >
            {/* Image */}
            <div className="h-[240px] animate-pulse bg-gray-200" />

            {/* Product information */}
            <div className="flex min-h-[152px] flex-col gap-3 p-4">
              <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />
              <div className="h-5 w-full animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />

              <div className="mt-auto flex items-center justify-between">
                <div className="h-6 w-24 animate-pulse rounded bg-gray-200" />
                <div className="size-10 animate-pulse rounded-full bg-gray-200" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-10 mb-12 flex justify-center gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="size-9 animate-pulse rounded-md bg-gray-200"
          />
        ))}
      </div>
    </main>
  );
}