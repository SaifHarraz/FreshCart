import { homeBenefits } from "../../data/home-benefits.data";

export default function HomeBenefits() {
  return (
    <section className="bg-[#F9FAFB] px-4 py-8">
      <div className="mx-auto grid max-w-[1472px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {homeBenefits.map(
          ({
            id,
            title,
            description,
            icon: Icon,
            iconColor,
            iconBackground,
          }) => (
            <div
              key={id}
              className="flex min-h-20 items-center gap-4 overflow-hidden rounded-xl bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-lg" >
              <div
                className="flex size-12 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: iconBackground }}
              >
                <Icon
                  className="size-5"
                  style={{ color: iconColor }}
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
              </div>

              <div className="min-w-0">
                <h3 className="text-sm leading-5 font-semibold text-[#1E2939]">
                  {title}
                </h3>

                <p className="text-xs leading-4 font-medium text-[#6A7282]">
                  {description}
                </p>
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
