import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductSkeletonCard";
import { useProductsApi } from "../hooks/useProductsApi";
import Filter from "../components/Filter";
const Shop = () => {
  const [search, setSearch] = useState("");
  let { isPending, data, error } = useProductsApi(search);

  return (
    <div className="min-h-screen bg-neutral-50 px-4 py-8 dark:bg-neutral-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
            Explore Products
          </h1>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            Browse our latest collection of products
          </p>
        </div>
        <Filter search={search} setSearch={setSearch} />
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {isPending
            ? Array.from({ length: 8 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))
            : data?.map((pro) => <ProductCard key={pro.id} product={pro} />)}
        </div>
      </div>
    </div>
  );
};

export default Shop;
