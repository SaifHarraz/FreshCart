
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const promotions = [
  {
    badge: "🔥 Deal of the Day",
    title: "Fresh Organic Fruits",
    description: "Get up to 40% off on selected organic fruits",
    discount: "40% OFF",
    code: "ORGANIC40",
    button: "Shop Now",
    href: "/products",
    gradient:
      "bg-[linear-gradient(157.5deg,#00BC7D_0%,#007A55_100%)]",
    buttonText: "text-[#009966]",
  },
  {
    badge: "✨ New Arrivals",
    title: "Exotic Vegetables",
    description:
      "Discover our latest collection of premium vegetables",
    discount: "25% OFF",
    code: "FRESH25",
    button: "Explore Now",
    href: "/products",
    gradient:
      "bg-[linear-gradient(157.5deg,#FF8904_0%,#FF2056_100%)]",
    buttonText: "text-[#FF6900]",
  },
];

export default function HomePromotions() {
  return (
    <section className="mx-auto my-8 w-[calc(100%-32px)] max-w-[1472px] md:w-[calc(100%-64px)]">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {promotions.map((promotion) => (
          <div
            key={promotion.code}
            className={`relative min-h-[320px] overflow-hidden rounded-2xl p-8 md:min-h-[300px] ${promotion.gradient}`}
          >
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 size-40 rounded-full bg-white/10" />
            <div className="absolute -bottom-16 -left-16 size-32 rounded-full bg-white/10" />

            {/* Content */}
            <div className="relative h-64 md:h-[236px]">
              <span className="absolute top-0 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white">
                {promotion.badge}
              </span>

              <h3 className="absolute top-11 text-2xl leading-8 font-bold text-white md:text-[30px] md:leading-9">
                {promotion.title}
              </h3>

              <p className="absolute top-[84px] text-base leading-6 text-white/80 md:top-[88px]">
                {promotion.description}
              </p>

              <div className="absolute top-[148px] flex items-center gap-4 md:top-32">
                <span className="text-[30px] leading-9 font-bold text-white">
                  {promotion.discount}
                </span>

                <span className="text-sm text-white/70">
                  Use code:{" "}
                  <strong className="font-bold text-white">
                    {promotion.code}
                  </strong>
                </span>
              </div>

              <Link
                href={promotion.href}
                className={`absolute top-52 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold transition-colors hover:bg-white/90 md:top-[188px] ${promotion.buttonText}`}
              >
                {promotion.button}
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
