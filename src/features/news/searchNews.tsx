import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { PaginatedNewsResponse } from "../../types/news";
import { searchNewsApi } from "../../services/news";

export function useSearchNews(currentPage: number) {
  const [searchParams] = useSearchParams();
  const searchVal = searchParams.get("val") || ""; // Eğer null ise boş string kullan

  const { data, isLoading: isPending } = useQuery<PaginatedNewsResponse, Error>({
    queryKey: ["search-val", searchVal, currentPage], // Query key'de `searchVal` ve `currentPage` ekli
    queryFn: () => searchNewsApi(searchVal, currentPage), // Query fonksiyonuna `currentPage` dahil
    enabled: !!searchVal, // Eğer `searchVal` boşsa query çalıştırılmaz
  });

  return { data, isPending };
}
