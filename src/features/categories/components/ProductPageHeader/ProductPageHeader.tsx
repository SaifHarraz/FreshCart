
import Link from "next/link";
import { ShoppingBasket } from "lucide-react";

export default function ProductPageHeader() {
  return (
    <section className="h-[224px] bg-gradient-to-br from-[#00A63E] via-[#00C875] to-[#00D492]">
      <div className="mx-auto h-full max-w-[1536px] px-4">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 pt-14 text-sm text-white"
        >
          <Link href="/" className="transition-opacity hover:opacity-80">
            Home
          </Link>
          <span className="opacity-70">/</span>
          <span className="font-medium">All Products</span>
        </nav>

        <div className="mt-6 flex items-center gap-5">
          <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-white/20 shadow-lg">
            <ShoppingBasket
              className="size-9 text-white"
              strokeWidth={2}
            />
          </div>

          <div>
            <h1 className="text-3xl leading-10 font-bold text-white">
              All Products
            </h1>
            <p className="mt-1 text-base leading-6 text-white/90">
              Explore our complete product collection
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
