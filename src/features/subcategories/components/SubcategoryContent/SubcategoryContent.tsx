import SubcategoryGrid from "../SubcategoryGrid/SubcategoryGrid";
import { getSubcategories } from "../../services/subcategories.service";

export type SubcategoriesPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function SubcategoryContent({
  params,
}: SubcategoriesPageProps) {
  const { id } = await params;

  const subcategories = await getSubcategories(id);

  return <SubcategoryGrid subcategories={subcategories} />;
}