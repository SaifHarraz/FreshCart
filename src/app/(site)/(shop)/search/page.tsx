import { Suspense } from "react";

import SearchPageContent from "@/features/search/components/SearchPageContent/SearchPageContent";
import SearchPageSkeleton from "@/features/search/components/SearchPageSkeleton/SearchPageSkeleton";

import type { SearchPageSearchParams } from "@/features/search/types/search-page.types";

interface SearchPageProps {
  searchParams: Promise<SearchPageSearchParams>;
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  return (
    <Suspense fallback={<SearchPageSkeleton />}>
      <SearchPageContent searchParams={searchParams} />
    </Suspense>
  );
}