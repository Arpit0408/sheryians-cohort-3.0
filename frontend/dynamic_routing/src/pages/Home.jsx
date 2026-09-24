import React, { useContext } from "react";
import ProductCard from "../components/ProductCard";
import EcomContext from "../context/EcomContext";
const Home = () => {
  const { ProductsData } = useContext(EcomContext);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-white">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ProductsData.map((item) => 
          <ProductCard product={item} key={item.id} />
        )}
      </div>
    </div>
  );
};

export default Home;
