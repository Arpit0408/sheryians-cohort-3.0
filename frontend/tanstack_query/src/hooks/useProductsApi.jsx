import { useQuery } from "@tanstack/react-query";
import { getProductsDataApi } from "../api/productApi";

export const useProductsApi = (search = "") => {
  let { data, isPending, error } = useQuery({
    queryKey: ["products", search],
    queryFn: () => getProductsDataApi(search),
    staleTime: 5000,
  });

  return {
    isPending,
    data,
    error,
  };
};
