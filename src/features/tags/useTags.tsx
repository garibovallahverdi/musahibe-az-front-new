import { useQuery } from "@tanstack/react-query";
import { getTags } from "../../services/tags";
import { TagData } from "../../types/tags";


 
export function useTags() {

    const { data, isLoading: isPending } = useQuery<TagData>({
        queryKey: ["tags"],
         queryFn: () => getTags()
  });

  return { data, isPending };
}
