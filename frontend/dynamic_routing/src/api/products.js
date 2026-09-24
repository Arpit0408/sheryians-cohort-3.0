import axios from "../utils/axios";

export const getProducts = async () => {
  const AllProducts = await axios.get("/products");
  return AllProducts;
};

export const getSingleProducts = async (id) => {
  const SingleProduct = await axios.get(`/products/${id}`);
  return SingleProduct;
};
