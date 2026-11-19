
import CategoryGrid from "@/features/categories/components/CategoryGrid";
import CategoryPageHeader from "@/features/categories/components/CategoryPageHeader";
import { getCategories } from "@/features/categories/services/categories.service";

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <>
      <CategoryPageHeader />

      <main className="mx-auto min-h-[600px] w-full max-w-[1312px] px-4 py-6 md:py-9">
        <CategoryGrid categories={categories} />
      </main>
    </>
  );
}
