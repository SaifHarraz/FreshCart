import Link from "next/link";
import { ChevronRight, Tag } from "lucide-react";

export default function BrandPageHeader() {
  return (
    <section
      className="w-full text-white"
      style={{
        backgroundImage:
          "linear-gradient(172.875deg, #7f22fe 0%, #8e51ff 50%, #c27aff 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1536px] flex-col gap-6 px-4 py-12 md:py-16">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-sm font-medium"
        >
          <Link
            href="/"
            className="text-white/70 transition-colors hover:text-white"
          >
            Home
          </Link>

          <ChevronRight className="size-4 text-white/40" />

          <span className="text-white">Brands</span>
        </nav>

        <div className="flex items-center gap-5">
          <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
            <Tag className="size-8 text-white" strokeWidth={1.8} />
          </div>

          <div className="flex flex-col">
            <h1 className="text-[30px] leading-9 font-bold tracking-[-0.75px] md:text-4xl md:leading-10 md:tracking-[-0.9px]">
              Top Brands
            </h1>

            <p className="mt-1 text-base leading-6 font-medium text-white/80">
              Shop from your favorite brands
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}