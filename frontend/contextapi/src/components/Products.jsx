import React from "react";
import ProductCard from "./ProductCard";
import ProductData from "../ProductData";
const Products = () => {
  return (
    <div className="grid grid-cols-4 gap-4 justify-center p-4">
      {ProductData.map((pro) => {
        return <ProductCard item={pro} key={pro.id} />;
      })}
    </div>
  );
};

export default Products;
