
import SubcategoryGrid from "@/features/subcategories/components/SubcategoryGrid/SubcategoryGrid";
import SubcategoryPageHeader from "@/features/subcategories/components/SubcategoryPageHeader/SubcategoryPageHeader";
import { getSubcategories } from "@/features/subcategories/services/subcategories.service";

interface SubcategoriesPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function SubcategoriesPage({
  params,
}: SubcategoriesPageProps) {
  const { id } = await params;
  const subcategories = await getSubcategories(id);

  return (
    <>
      <SubcategoryPageHeader />
      <main className="mx-auto min-h-[600px] w-full max-w-[1536px] px-4 py-6 md:py-9">
        <SubcategoryGrid subcategories={subcategories} />
      </main>
    </>
  );
}
