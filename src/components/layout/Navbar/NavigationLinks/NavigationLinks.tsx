
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import type { HeaderNavItem } from "../../types";

interface NavigationLinksProps {
  items: HeaderNavItem[];
  mobile?: boolean;
  onNavigate?: () => void;
}

export default function NavigationLinks({
  items,
  mobile = false,
  onNavigate,
}: NavigationLinksProps) {
  if (mobile) {
    return (
      <nav aria-label="Mobile navigation" className="flex flex-col">
        {items.map((item) => (
          <div key={item.href} className="border-b border-gray-100">
            <Link
              href={item.href}
              onClick={onNavigate}
              className="flex items-center justify-between px-3 py-3 text-sm font-medium text-gray-700 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>

            {item.children?.length ? (
              <div className="mb-2 ml-3 flex flex-col border-l border-gray-200 pl-3">
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={onNavigate}
                    className="py-2 text-sm text-gray-500 transition-colors hover:text-primary"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </nav>
    );
  }

  return (
    <nav
      aria-label="Main navigation"
      className="hidden items-center gap-6 xl:flex"
    >
      {items.map((item) => (
        <div key={item.href} className="group relative">
          <Link
            href={item.href}
            className="flex items-center gap-1 py-6 text-sm font-medium text-gray-700 transition-colors hover:text-primary"
          >
            {item.label}

            {item.children?.length ? (
              <ChevronDown className="size-4 transition-transform group-hover:rotate-180" />
            ) : null}
          </Link>

          {item.children?.length ? (
            <div className="invisible absolute top-full left-0 z-50 min-w-52 translate-y-2 rounded-xl border border-gray-100 bg-white p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block rounded-lg px-3 py-2.5 text-sm text-gray-600 transition-colors hover:bg-primary/5 hover:text-primary"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </nav>
  );
}
