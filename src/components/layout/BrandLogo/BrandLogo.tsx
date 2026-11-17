
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

interface BrandLogoProps {
  variant?: "navbar" | "footer";
}

export default function BrandLogo({
  variant = "navbar",
}: BrandLogoProps) {
  const isFooter = variant === "footer";

  return (
    <Link
      href="/"
      aria-label="FreshCart home"
      className={`inline-flex shrink-0 items-center gap-2 ${
        isFooter
          ? "rounded-lg bg-white px-3 py-2"
          : ""
      }`}
    >
      <ShoppingCart
        className={`shrink-0 -scale-x-100 ${
          isFooter
            ? "size-7 text-primary"
            : "size-7 text-primary lg:size-8"
        }`}
        strokeWidth={1.8}
      />

      <span
        className={`font-bold tracking-tight ${
          isFooter
            ? "text-2xl text-[#25313B]"
            : "text-2xl text-primary"
        }`}
      >
        FreshCart
      </span>
    </Link>
  );
}
