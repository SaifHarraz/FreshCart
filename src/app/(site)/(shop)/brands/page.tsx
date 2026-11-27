import BrandGrid from "@/features/brands/components/BrandGrid/BrandGrid";
import BrandPageHeader from "@/features/brands/components/BrandPageHeader/BrandPageHeader";
import { getBrands } from "@/features/brands/services/brands.service";

export default async function Page() {
  const brands = await getBrands();

  return (
    <>
      <BrandPageHeader />

      <section className="min-h-[1200px] bg-[#f9fafb]/50 py-6 md:py-10">
        <div className="mx-auto w-full max-w-[1536px] px-4">
          <BrandGrid brands={brands} />
        </div>
      </section>
    </>
  );
}