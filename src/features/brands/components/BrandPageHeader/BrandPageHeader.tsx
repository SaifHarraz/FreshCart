import Link from "next/link";
import { ChevronRight, Tag } from "lucide-react";

export default function BrandPageHeader() {
  return (
    <section className="bg-gradient-to-r from-purple-700 to-purple-600 text-white">
      <div className="mx-auto flex min-h-[200px] max-w-[1536px] flex-col justify-center px-4 py-10 md:min-h-[240px]">
        <nav className="mb-6 flex items-center gap-2 text-sm text-white/80">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <ChevronRight size={16} />
          <span className="font-medium text-white">Brands</span>
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
            <Tag size={24} />
          </div>

          <div>
            <h1 className="text-3xl font-bold leading-9">
              Top Brands
            </h1>
            <p className="mt-2 text-sm text-white/80">
              Explore products from your favorite brands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
