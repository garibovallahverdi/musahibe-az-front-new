import { useParams } from "react-router-dom";
import { getNewsByCategory } from "../../services/news";
import { useQuery } from "@tanstack/react-query";
import { PaginatedNewsResponse } from "../../types/news";

export function useNewsCategory(currentPage: number,) {
  const { category } = useParams() as { category: string };

  const { data, isLoading: isPending } = useQuery<PaginatedNewsResponse, Error>({
    queryKey: ["news", category, currentPage],
    queryFn: () => getNewsByCategory(category,currentPage),
  });

  return { data, isPending };
}
