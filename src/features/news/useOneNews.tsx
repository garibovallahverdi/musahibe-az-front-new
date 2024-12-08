import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router-dom";
import { getNewsById } from "../../services/news";
import { NewsItem } from "../../types/news";

export function useOneNews() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("item") as string; 
  const { slug } = useParams();
  
  const queryKey = ["news-detail", slug];

  const { data, isLoading: isPending } = useQuery<NewsItem>({
    queryKey,
    queryFn: () => getNewsById(searchQuery),
  });

  return { isPending, data };
}
