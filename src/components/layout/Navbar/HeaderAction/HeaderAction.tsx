import Link from "next/link";

import type { HeaderActionProps } from "../types";

export default function HeaderAction({
  href,
  label,
  icon,
  count,
}: HeaderActionProps) {
  return (
    <Link
      href={href}
      title={label}
      aria-label={count ? `${label}, ${count} items` : label}
      className="group relative flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-100"
    >
      <span className="text-gray-500 transition-colors group-hover:text-primary-600">
        {icon}
      </span>

      {typeof count === "number" && count > 0 ? (
        <span className="absolute top-0.5 right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary-600 px-1 text-[10px] font-semibold text-white">
          {count > 99 ? "99+" : count}
        </span>
      ) : null}
    </Link>
  );
}