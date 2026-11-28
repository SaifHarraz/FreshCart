
"use client";

import { useSearchParams } from "next/navigation";
import SearchInput from "../SearchInput/SearchInput";


interface SearchBarProps {
  onSearch?: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") ?? "";

  return (
    <SearchInput
      key={keyword}
      initialValue={keyword}
      onSearch={onSearch}
    />
  );
}
