
import Link from "next/link";
import { Search } from "lucide-react";
import { SearchPageHeaderProps } from "../../types/search-page.types";


export default function SearchPageHeader({
  keyword,
}: SearchPageHeaderProps) {
  return (
    <section className="border-b border-[#E5E7EB] bg-white">
      <div className="mx-auto w-full max-w-[1536px] px-4 py-8 md:py-10">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-sm text-[#6A7282]"
        >
          <Link href="/" className="hover:text-[#16A34A]">
            Home
          </Link>

          <span>/</span>

          <span className="text-[#1E2939]">
            Search
          </span>
        </nav>

        <div className="mt-6 flex items-center gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#F0FDF4]">
            <Search className="size-6 text-[#16A34A]" />
          </div>

          <div className="min-w-0">
            <h1 className="text-2xl leading-8 font-bold text-[#101828]">
              Search Results
            </h1>

            <p className="mt-1 truncate text-sm text-[#6A7282]">
              {keyword
                ? `Showing products matching "${keyword}"`
                : "Explore our product collection"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
