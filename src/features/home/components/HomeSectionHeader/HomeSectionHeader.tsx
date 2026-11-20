import Link from "next/link";
import { ChevronRight } from "lucide-react";

import type { HomeSectionHeaderProps } from "../../types/home-section-header.types";

export default function HomeSectionHeader({
  title,
  action,
}: HomeSectionHeaderProps) {
  return (
    <div className="flex w-full items-center justify-between gap-4">
      <div className="flex min-w-0 items-center gap-3">
        <span className="h-8 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-[#00BC7D] to-[#007A55]" />

        <h2 className="text-[30px] leading-9 font-bold text-[#1E2939]">
          {title}
        </h2>
      </div>

      {action && (
        <Link
          href={action.href}
          className="inline-flex shrink-0 items-center text-base font-medium text-[#16A34A]"
        >
          {action.label}
          <ChevronRight className="ml-2 size-5" />
        </Link>
      )}
    </div>
  );
}