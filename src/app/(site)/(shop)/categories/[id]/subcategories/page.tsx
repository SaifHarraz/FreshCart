import { Suspense } from "react";

import SubcategoryPageSkeleton from "@/features/subcategories/components/SubcategoryPageSkeleton/SubcategoryPageSkeleton";
import SubcategoryContent, {
  SubcategoriesPageProps,
} from "@/features/subcategories/components/SubcategoryContent/SubcategoryContent";
import SubcategoryPageHeader from "@/features/subcategories/components/SubcategoryPageHeader/SubcategoryPageHeader";

export default function SubcategoriesPage({
  params,
}: SubcategoriesPageProps) {
  return (
    <>
      <SubcategoryPageHeader />

      <main className="mx-auto min-h-[600px] w-full max-w-[1536px] px-4 py-6 md:py-9">
        <Suspense fallback={<SubcategoryPageSkeleton />}>
          <SubcategoryContent params={params} />
        </Suspense>
      </main>
    </>
  );
}