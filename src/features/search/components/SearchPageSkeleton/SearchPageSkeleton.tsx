export default function SearchPageSkeleton() {
  return (
    <div
      className="mx-auto w-full max-w-[1536px] animate-pulse px-4 py-8 md:py-10"
      aria-busy="true"
      aria-label="Loading search results"
    >
      {/* Search heading */}
      <div className="mb-8 space-y-3">
        <div className="h-7 w-64 rounded-md bg-gray-200" />
        <div className="h-4 w-40 rounded-md bg-gray-200" />
      </div>

      {/* Search toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="h-10 w-28 rounded-md bg-gray-200" />
        <div className="h-10 w-40 rounded-md bg-gray-200" />
      </div>

      {/* Product grid */}
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="space-y-3">
            <div className="aspect-square rounded-xl bg-gray-200" />
            <div className="h-4 w-3/4 rounded-md bg-gray-200" />
            <div className="h-4 w-1/2 rounded-md bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
}