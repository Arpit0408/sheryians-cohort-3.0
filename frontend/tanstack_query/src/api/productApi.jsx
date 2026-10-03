import { axiosInstance } from "../config/axiosInstance";

export let getProductsDataApi = async (search = "") => {
  try {
    const endpoint = search ? `/products/search?q=${search}` : `/products`;
    const proData = await axiosInstance.get(endpoint);
    return proData.data.products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
};
