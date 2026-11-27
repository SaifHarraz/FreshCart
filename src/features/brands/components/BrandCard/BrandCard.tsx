import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BrandCardProps } from "../../types/brand.types";

export default function BrandCard({ name, logo }: BrandCardProps) {
  return (
    <Link
      href="/products"
      aria-label={`View products from ${name}`}
      className="
        group flex h-[225px] flex-col items-center
        rounded-2xl border border-[#f3f4f6] bg-white p-4
        shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]
        transition-shadow duration-200
        hover:shadow-[0_4px_8px_0_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.08)]
        focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-[#7f22fe]
        md:h-[202.67px] md:p-5
        xl:h-[288px]
      "
    >
      <div className="relative size-[137px] shrink-0 overflow-hidden rounded-xl bg-[#f9fafb] p-4 md:size-[106.67px] xl:size-[192px]">
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          sizes="(max-width: 767px) 137px, (max-width: 1279px) 107px, 192px"
          className="object-contain p-4"
        />
      </div>

      <h2 className="mt-3 w-full truncate text-center text-sm leading-5 font-semibold text-[#101828]">
        {name}
      </h2>

      <span
        className="
          mt-1.5 flex items-center justify-center gap-1
          text-xs leading-4 font-medium text-[#7f22fe]
          opacity-0 transition-opacity duration-200
          group-hover:opacity-100
          group-focus-visible:opacity-100
        "
      >
        View Products
        <ArrowRight className="size-3" />
      </span>
    </Link>
  );
}