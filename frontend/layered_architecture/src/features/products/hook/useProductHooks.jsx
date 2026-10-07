import { useQuery } from "@tanstack/react-query";
import {
  getAllCategories,
  getAllProducts,
  getProductByCategory,
} from "../api/productApis";
import { useEffect, useState } from "react";

export const useAllProducts = () => {
  const [search, setSearch] = useState(null);
  const [debounceSearch, setDebounceSearch] = useState(null);

  useEffect(() => {
    let timer = setTimeout(() => {
      setDebounceSearch(search);
    }, 1000);

    return () => clearTimeout(timer);
  }, [search]);

  let { data, isPending, errors } = useQuery({
    queryKey: ["products", debounceSearch],
    queryFn: () => getAllProducts(debounceSearch),
  });
  console.log("Products Data", data);
  return {
    data,
    isPending,
    errors,
    search,
    setSearch,
  };
};

export const useAllCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });
};

export const useGetProductByCategory = () => {
  const [category, setCategory] = useState("");
  const { data, isPending, errors } = useQuery({
    queryKey: ["Category_Products", category],
    queryFn: () => getProductByCategory(category),
    enabled: Boolean(category),
  });

  return {
    data,
    isPending,
    errors,
    category,
    setCategory,
  };
};
