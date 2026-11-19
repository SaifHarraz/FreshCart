
import Link from "next/link";
import { Layers3 } from "lucide-react";

export default function CategoryPageHeader() {
  return (
    <section className="h-[228px] bg-gradient-to-r from-[#00A63E] via-[#00C875] to-[#00D492] md:h-[240px] lg:h-[180px]">
      <div className="mx-auto h-full max-w-[1536px] px-4">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 pt-12 text-xs text-white md:pt-16 lg:pt-10"
        >
          <Link href="/" className="transition-opacity hover:opacity-80">
            Home
          </Link>
          <span className="opacity-70">/</span>
          <span className="font-medium">Categories</span>
        </nav>

        <div className="mt-6 flex items-center gap-4 md:mt-6 lg:mt-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/20 shadow-lg md:size-16">
            <Layers3 className="size-7 text-white md:size-8" strokeWidth={2.5} />
          </div>

          <div>
            <h1 className="text-2xl leading-9 font-bold text-white md:text-3xl">
              All Categories
            </h1>
            <p className="text-xs leading-5 text-white/90 md:text-base md:leading-6">
              Browse our wide range of product categories
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
