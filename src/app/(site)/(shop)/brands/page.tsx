import BrandGrid from "@/features/brands/components/BrandGrid/BrandGrid";
import BrandPageHeader from "@/features/brands/components/BrandPageHeader/BrandPageHeader";
import { getBrands } from "@/features/brands/services/brands.service";

export default async function Page() {
  const brands = await getBrands();

  return (
    <>
      <BrandPageHeader />

      <main className="mx-auto w-full max-w-[1536px] px-4 py-8">
        <BrandGrid brands={brands} />
      </main>
    </>
  );
}