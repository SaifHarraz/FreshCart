
import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/images/freshcart-logo.49f1b44d.svg";
import type { BrandLogoProps } from "./types";

export default function BrandLogo({
  variant = "navbar",
}: BrandLogoProps) {
  const isFooter = variant === "footer";

  return (
    <Link
      href="/"
      aria-label="FreshCart home"
      className={
        isFooter
          ? "inline-flex shrink-0 rounded-lg bg-white px-4 py-2"
          : "inline-flex shrink-0"
      }
    >
      <Image
        src={logo}
        alt="FreshCart"
        priority
        className="h-auto w-[160px]"
      />
    </Link>
  );
}
