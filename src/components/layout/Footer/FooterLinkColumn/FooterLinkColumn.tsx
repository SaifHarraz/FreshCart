import Link from "next/link";
import type { FooterLinkColumnProps } from "../types";

export default function FooterLinkColumn({
  title,
  links,
}: FooterLinkColumnProps) {
  return (
    <div className="flex flex-col items-start gap-5">
      <h3 className="text-lg font-semibold leading-7 text-white">
        {title}
      </h3>

      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
             className="text-sm font-medium leading-5 text-[#99A1AF] transition-colors duration-200 hover:text-primary"  >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}