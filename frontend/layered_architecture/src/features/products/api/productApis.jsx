import { Search } from "lucide-react";
import { api } from "../../../config/api";

export const getAllProducts = async (search) => {
  let url = search ? `/products/search?q=${search}` : "/products?limit=100";
  let res = await api.get(url);
  return res.data;
};

export const getAllCategories = async () => {
  let url = "/products/category-list";
  let res = await api.get(url);
  return res.data;
};

export const getProductByCategory = async (cate) => {
  let url = `/products/category/${cate}`;
  let res = await api.get(url);
  return res.data;
};
