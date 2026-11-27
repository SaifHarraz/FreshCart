
import { Suspense } from "react";

import SearchPageContent from "@/features/search/components/SearchPageContent/SearchPageContent";
import SearchResultsSkeleton from "@/features/search/components/SearchResultsSkeleton/SearchResultsSkeleton";

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
    page?: string;
    sort?: string;
    [key: string]: string | undefined;
  }>;
};

export default function Page({ searchParams }: SearchPageProps) {
  return (
    <Suspense fallback={<SearchResultsSkeleton />}>
      <SearchPageContent searchParams={searchParams} />
    </Suspense>
  );
}
