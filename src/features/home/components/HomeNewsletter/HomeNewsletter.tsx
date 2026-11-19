
import {
  Apple,
  ArrowRight,
  Leaf,
  Mail,
  Play,
  Star,
  Tag,
  Truck,
} from "lucide-react";

const benefits = [
  { label: "Fresh Picks Weekly", icon: Leaf },
  { label: "Free Delivery Codes", icon: Truck },
  { label: "Members-Only Deals", icon: Tag },
];

export default function HomeNewsletter() {
  return (
    <section className="mx-auto w-full max-w-[1920px] bg-gradient-to-b from-white to-[#F9FAFB] px-4 py-16 md:px-8">
      <div className="relative mx-auto max-w-[1472px] overflow-hidden rounded-[40px] border border-[#D0FAE5]/50 bg-[linear-gradient(145deg,#F3F4F6_0%,#FFFFFF_50%,#FEF2F2_100%)] shadow-[0px_25px_50px_-12px_rgba(0,188,125,0.1)]">
        {/* Decorative blurred backgrounds */}
        <div className="pointer-events-none absolute -top-40 -right-20 size-80 rounded-full bg-[#A4F4CF]/40 blur-[32px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 size-64 rounded-full bg-[#96F7E4]/30 blur-[32px]" />

        <div className="relative flex flex-col gap-8 p-8 md:grid md:grid-cols-[minmax(0,1.53fr)_minmax(0,1fr)] md:items-stretch md:p-14">

          {/* Newsletter Content */}
          <div className="flex min-w-0 flex-col gap-6">
            {/* Newsletter heading */}
            <div className="flex items-center gap-4">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00BC7D] to-[#00BBA7] text-white shadow-[0px_10px_15px_-3px_rgba(0,188,125,0.3)]">
                <Mail size={25} />
              </div>

              <div>
                <h3 className="text-sm font-semibold tracking-[0.35px] text-[#009966]">
                  NEWSLETTER
                </h3>
                <p className="text-xs font-medium text-[#6A7282]">
                  50,000+ subscribers
                </p>
              </div>
            </div>

            {/* Title and description */}
            <div className="flex flex-col gap-3">
              <h2 className="text-[30px] leading-[1.375] font-bold text-[#101828] md:text-3xl lg:text-[36px]">
                <span className="block md:inline">
                  Get the Freshest Updates{" "}
                </span>
                <span className="text-[#009966]">
                  Delivered Free
                </span>
              </h2>

              <p className="text-base leading-7 font-medium text-[#6A7282] md:text-lg">
                Weekly recipes, seasonal offers & exclusive member perks.
              </p>
            </div>

            {/* Benefits */}
            <div className="flex flex-col items-start gap-3 md:flex-row md:flex-wrap">
              {benefits.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex h-[50px] shrink-0 items-center gap-[10px] rounded-full border border-[#D0FAE5] bg-white/80 px-[17px] py-[11px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] backdrop-blur-sm"
                >
                  <span className="flex size-7 items-center justify-center rounded-full bg-[#D0FAE5] text-[#009966]">
                    <Icon size={15} fill="currentColor" />
                  </span>

                  <span className="whitespace-nowrap text-sm font-medium text-[#364153]">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Subscribe form */}
            <form className="pt-2">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="h-[60px] min-w-0 flex-1 rounded-xl border border-[#D1D5DC] bg-white px-[22px] text-sm text-[#364153] shadow-sm outline-none placeholder:text-[#98A2B3] focus:border-[#00BC7D] focus:ring-2 focus:ring-[#00BC7D]/20"
                />

                <button
                  type="button"
                  className="flex h-[56px] shrink-0 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#009966] to-[#00BC7D] px-8 text-base font-semibold text-white shadow-[0px_10px_15px_-3px_rgba(0,188,125,0.25)] transition hover:brightness-95 sm:h-[60px]"
                >
                  Subscribe
                  <ArrowRight size={18} />
                </button>
              </div>

              <p className="mt-3 pl-1 text-xs text-[#98A2B3]">
                ✨ Unsubscribe anytime. No spam, ever.
              </p>
            </form>
          </div>

          {/* App promotion */}
          <div className="flex min-w-0 items-stretch border-[#D0FAE5] md:border-l md:pl-8">
            <div className="relative flex min-h-[446px] w-full flex-col justify-between overflow-hidden rounded-[20px] bg-gradient-to-br from-[#101828] to-[#1E2939] p-8 text-white md:min-h-[446px] lg:min-h-[393px]">
              {/* Decorative circles */}
              <div className="pointer-events-none absolute -top-16 -right-16 size-32 rounded-full bg-[#00BC7D]/10 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-12 -left-12 size-24 rounded-full bg-[#00BC7D]/10 blur-2xl" />

              <div className="relative">
                <span className="inline-flex rounded-full border border-[#00BC7D]/30 bg-[#00BC7D]/15 px-3 py-1.5 text-[10px] font-semibold text-[#00BC7D]">
                  📱 MOBILE APP
                </span>

                <h3 className="mt-5 text-2xl leading-[1.25] font-bold">
                  Shop Faster on Our App
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-400">
                  Get app-exclusive deals & 15% off your first order.
                </p>

                {/* Store buttons */}
                <div className="mt-7 flex flex-col gap-2.5">
                  <a
                    href="#"
                    className="flex h-[59px] items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-4 transition hover:bg-white/15"
                  >
                    <Apple size={25} fill="white" />
                    <span className="flex flex-col">
                      <span className="text-[10px] text-gray-400">
                        DOWNLOAD ON
                      </span>
                      <span className="text-sm font-semibold">
                        App Store
                      </span>
                    </span>
                  </a>

                  <a
                    href="#"
                    className="flex h-[59px] items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-4 transition hover:bg-white/15"
                  >
                    <Play size={25} fill="white" />
                    <span className="flex flex-col">
                      <span className="text-[10px] text-gray-400">
                        GET IT ON
                      </span>
                      <span className="text-sm font-semibold">
                        Google Play
                      </span>
                    </span>
                  </a>
                </div>
              </div>

              {/* Rating */}
              <div className="relative mt-5 flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={14}
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                <span className="text-xs text-gray-400">
                  4.9 · 100K+ downloads
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
