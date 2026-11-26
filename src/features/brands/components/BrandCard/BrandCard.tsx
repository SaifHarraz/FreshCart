import Image from "next/image";
import Link from "next/link";

interface BrandCardProps {
  name: string;
  logo: string;
  slug: string;
}

export default function BrandCard({
  name,
  logo,
  slug,
}: BrandCardProps) {
  return (
    <article className="group flex h-[225px] flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md md:h-[288px]">
      <div className="relative mb-5 flex size-28 items-center justify-center rounded-lg bg-gray-50 p-4 md:size-36">
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          sizes="(max-width: 768px) 112px, 144px"
          className="object-contain p-4"
        />
      </div>

      <h2 className="text-center text-base font-semibold text-gray-900">
        {name}
      </h2>

      <Link
        href={`/brands/${slug}`}
        className="mt-3 text-sm font-medium text-purple-600 opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100"
      >
        View Products
      </Link>
    </article>
  );
}
