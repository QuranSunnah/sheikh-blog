import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const fetchAllTodos = () => {
  return apiClient.get("/todos");
};

export const useFetchTodos = (useQueryOptions) => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchAllTodos,
    ...useQueryOptions,
    select: (data) => {
      let apiData = data.data;
      return apiData;
    },
  });
};
