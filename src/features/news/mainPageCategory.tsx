import { getMainPageCategory } from "../../services/news";
import { useQuery } from "@tanstack/react-query";
import {  PaginatedNewsResponse } from "../../types/news";

export function useMainPageCategory(category: string,) {

  const { data, isLoading: isPending } = useQuery<PaginatedNewsResponse>({
    queryKey: ["main-page-category", category],
    queryFn: () => getMainPageCategory(category),
  });

  return { data, isPending };
}
