
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
    <section className="w-full bg-[linear-gradient(to_bottom,#FFFFFF_0%,#F9FAFB_100%)] px-4 py-16 md:px-8">
      <div
        className="
          relative mx-auto max-w-[1472px] rounded-[40px] border
          border-[#D0FAE5]/50 p-px
          shadow-[0px_25px_50px_-12px_rgba(0,188,125,0.1)]
        "
      >
        <div
          className="
            relative isolate overflow-hidden rounded-[39px]
            bg-[linear-gradient(106.6deg,#F3F4F6_0%,#FFFFFF_50%,#FEF2F2_100%)]
            md:bg-[linear-gradient(148.47deg,#F3F4F6_0%,#FFFFFF_50%,#FEF2F2_100%)]
            xl:bg-[linear-gradient(161deg,#F3F4F6_0%,#FFFFFF_50%,#FEF2F2_100%)]
          "
        >
          {/* Main card decorative gradients */}
          <div
            className="
              pointer-events-none absolute top-[-161px] right-[-81px]
              size-[320px] rounded-full
              bg-[linear-gradient(135deg,rgba(164,244,207,0.4)_0%,rgba(164,244,207,0)_100%)]
              blur-[32px]
            "
          />

          <div
            className="
              pointer-events-none absolute bottom-[-129px] left-[-65px]
              size-[256px] rounded-full
              bg-[linear-gradient(45deg,rgba(150,247,228,0.3)_0%,rgba(150,247,228,0)_100%)]
              blur-[32px]
            "
          />

          {/* Main content */}
          <div
            className="
              relative flex flex-col gap-8 p-8
              lg:grid lg:grid-cols-[minmax(0,1.53fr)_minmax(0,1fr)]
              lg:items-start lg:gap-8 lg:p-14
            "
          >
            {/* Newsletter content */}
            <div className="flex min-w-0 flex-col gap-6">
              {/* Newsletter heading */}
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex size-14 shrink-0 items-center justify-center
                    rounded-2xl bg-gradient-to-br from-[#00BC7D] to-[#00BBA7]
                    text-white
                    shadow-[0px_10px_15px_-3px_rgba(0,188,125,0.3)]
                  "
                >
                  <Mail size={25} />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold tracking-[0.35px] text-[#009966]">
                    NEWSLETTER
                  </span>

                  <span className="text-xs font-medium text-[#6A7282]">
                    50,000+ subscribers
                  </span>
                </div>
              </div>

              {/* Title and description */}
              <div className="flex flex-col gap-3">
                <h2
                  className="
                    text-[30px] leading-[1.375] font-bold text-[#101828]
                    xl:text-[36px] xl:leading-[1.375]
                  "
                >
                  Get the Freshest Updates{" "}
                  <span className="text-[#009966]">Delivered Free</span>
                </h2>

                <p className="text-base leading-7 font-medium text-[#6A7282] xl:text-lg">
                  Weekly recipes, seasonal offers &amp; exclusive member perks.
                </p>
              </div>

              {/* Benefits */}
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
                {benefits.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="
                      flex h-[50px] shrink-0 items-center gap-[10px]
                      rounded-full border border-[#D0FAE5]
                      bg-white/80 px-[17px] py-[11px]
                      shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]
                      backdrop-blur-[4px]
                    "
                  >
                    <span
                      className="
                        flex size-7 shrink-0 items-center justify-center
                        rounded-full bg-[#D0FAE5] text-[#009966]
                      "
                    >
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
                    className="
                      h-[60px] min-w-0 flex-1 rounded-2xl
                      border-2 border-[#E5E7EB] bg-white
                      px-[22px] text-sm text-[#364153]
                      shadow-sm outline-none
                      placeholder:text-[#98A2B3]
                      focus:border-[#00BC7D]
                      focus:ring-2 focus:ring-[#00BC7D]/20
                    "
                  />

                  <button
                    type="button"
                    className="
                      flex h-[60px] shrink-0 items-center justify-center
                      gap-3 rounded-2xl
                      bg-gradient-to-r from-[#009966] to-[#00BC7D]
                      px-8 text-base font-semibold text-white
                      shadow-[0px_10px_15px_-3px_rgba(0,188,125,0.25)]
                      transition hover:brightness-95
                    "
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
            <div
              className="
                min-w-0
                lg:border-l lg:border-[#D0FAE5] lg:pl-[33px]
              "
            >
              <div
                className="
                  relative flex min-h-[445.5px] w-full flex-col
                  justify-between overflow-hidden rounded-[24px]
                  bg-[linear-gradient(123deg,#101828_0%,#1E2939_100%)]
                  p-8 text-white
                  xl:min-h-[392.75px]
                "
              >
                {/* App card decorative gradients */}
                <div
                  className="
                    pointer-events-none absolute top-[-64px] right-[-64px]
                    size-32 rounded-full bg-[#00BC7D]/20 blur-[20px]
                  "
                />

                <div
                  className="
                    pointer-events-none absolute bottom-[-48px] left-[-48px]
                    size-24 rounded-full bg-[#00BC7D]/20 blur-[20px]
                  "
                />

                {/* App card content */}
                <div className="relative">
                  <span
                    className="
                      inline-flex items-center rounded-full
                      border border-[#00BC7D]/30
                      bg-[#00BC7D]/20 px-[13px] py-[7px]
                      text-xs font-semibold text-[#00D492]
                    "
                  >
                    📱 MOBILE APP
                  </span>

                  <h3 className="mt-5 text-2xl leading-8 font-bold">
                    Shop Faster on Our App
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[#99A1AF]">
                    Get app-exclusive deals &amp; 15% off your first order.
                  </p>

                  {/* Store buttons */}
                  <div className="mt-7 flex flex-col gap-3">
                    <a
                      href="#"
                      className="
                        flex items-center gap-3 rounded-xl
                        border border-white/10 bg-white/10
                        px-[17px] py-[13px]
                        backdrop-blur-[4px] transition
                        hover:bg-white/15
                      "
                    >
                      <Apple size={25} fill="white" />

                      <span className="flex flex-col">
                        <span className="text-[10px] text-[#99A1AF]">
                          DOWNLOAD ON
                        </span>

                        <span className="text-sm font-semibold">
                          App Store
                        </span>
                      </span>
                    </a>

                    <a
                      href="#"
                      className="
                        flex items-center gap-3 rounded-xl
                        border border-white/10 bg-white/10
                        px-[17px] py-[13px]
                        backdrop-blur-[4px] transition
                        hover:bg-white/15
                      "
                    >
                      <Play size={25} fill="white" />

                      <span className="flex flex-col">
                        <span className="text-[10px] text-[#99A1AF]">
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
                  <div className="flex text-[#FACC15]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={14}
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    ))}
                  </div>

                  <span className="text-xs text-[#99A1AF]">
                    4.9 · 100K+ downloads
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
