import Link from "next/link";
import { Search } from "lucide-react";

type SearchPageHeaderProps = {
  query?: string;
};

export default function SearchPageHeader({
  query = "",
}: SearchPageHeaderProps) {
  return (
    <section className="border-b border-[#E5E7EB] bg-white">
      <div className="mx-auto w-full max-w-[1536px] px-4 py-6 md:py-8">
        <nav
          aria-label="Breadcrumb"
          className="mb-5 flex items-center gap-2 text-sm text-[#6A7282]"
        >
          <Link href="/" className="transition-colors hover:text-[#16A34A]">
            Home
          </Link>

          <span>/</span>

          <span className="font-medium text-[#364153]">
            Search Results
          </span>
        </nav>

        <form
          action="/search"
          method="GET"
          className="relative mx-auto w-full max-w-[672px]"
        >
          <Search className="absolute top-1/2 left-4 size-5 -translate-y-1/2 text-[#98A2B3]" />

          <input
            type="search"
            name="q"
            defaultValue={query}
            placeholder="Search for products..."
            aria-label="Search for products"
            className="h-[54px] w-full rounded-lg border border-[#D1D5DC] bg-white pr-4 pl-12 text-sm text-[#364153] outline-none transition-colors placeholder:text-[#98A2B3] focus:border-[#16A34A] focus:ring-2 focus:ring-[#16A34A]/10"
          />
        </form>
      </div>
    </section>
  );
}