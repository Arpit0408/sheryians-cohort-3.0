import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { axiosInstance } from "../config/axiosInstance";
const Products = () => {
  const [Products, setProducts] = useState(null);
  const [Loading, setLoading] = useState(true);

  const productsData = async () => {
    const res = await axiosInstance.get("/products");
    setProducts(res.data);
    setLoading(false);
  };

  useEffect(() => {
    productsData();
  }, []);

  if (Loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {Products?.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Products;
