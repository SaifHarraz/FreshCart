import { benefitItems } from "./data";

export default function BenefitsStrip() {
  return (
    <section
      aria-label="Shopping benefits"
      className="border-y border-[#DCFCE7] bg-[#F0FDF4]"
    >
      <div className="mx-auto grid max-w-[1504px] grid-cols-1 gap-6 px-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefitItems.map(({ id, title, description, icon: Icon }) => (
          <div key={id} className="flex items-center gap-3">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#DCFCE7]">
              <Icon
                aria-hidden="true"
                className="size-[22px] text-[#16A34A]"
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