
import { Truck, RotateCcw, ShieldCheck, Headset } from "lucide-react";

const benefits = [
  {
    id: "shipping",
    title: "Free Shipping",
    description: "On orders over 500 EGP",
    icon: Truck,
  },
  {
    id: "returns",
    title: "Easy Returns",
    description: "14-day return policy",
    icon: RotateCcw,
  },
  {
    id: "payment",
    title: "Secure Payment",
    description: "100% secure checkout",
    icon: ShieldCheck,
  },
  {
    id: "support",
    title: "24/7 Support",
    description: "Contact us anytime",
    icon: Headset,
  },
];

export default function BenefitsStrip() {
  return (
    <section
      aria-label="Shopping benefits"
      className="border-y border-[#DCFCE7] bg-[#F0FDF4]"
    >
      <div className="mx-auto grid max-w-[1504px] grid-cols-1 gap-6 px-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map(({ id, title, description, icon: Icon }) => (
          <div key={id} className="flex items-center gap-3">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#DCFCE7]">
              <Icon
                aria-hidden="true"
                className="size-[22px] text-[#16A34A]"
                strokeWidth={2}
              />
            </div>

            <div>
              <h4 className="text-sm leading-5 font-semibold text-[#101828]">
                {title}
              </h4>

              <p className="text-xs leading-4 font-medium text-[#6A7282]">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
