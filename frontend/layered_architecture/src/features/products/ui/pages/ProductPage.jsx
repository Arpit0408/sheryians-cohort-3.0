import React from "react";
import {
  useAllProducts,
  useGetProductByCategory,
} from "../../hook/useProductHooks";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";
import { AlertCircle } from "lucide-react";

const ProductPage = () => {
  let {
    data: allProductsData,
    isPending: isAllPending,
    errors: allErrors,
    search,
    setSearch,
  } = useAllProducts();

  let {
    data: catProductsData,
    isPending: isCatPending,
    errors: catErrors,
    category,
    setCategory,
  } = useGetProductByCategory();

  const isCategorySelected = Boolean(category && category !== "");
  const products = isCategorySelected
    ? catProductsData?.products
    : allProductsData?.products;
  const isLoading = isCategorySelected ? isCatPending : isAllPending;
  const isError = isCategorySelected ? catErrors : allErrors;

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="border-b border-slate-800/80 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-2">
          <span>Premium Collection</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Explore Products
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Discover {products ? `${products.length} products` : "trending items"}{" "}
          {isCategorySelected ? `in ${category}` : "curated for you"}
        </p>
      </div>

      {/* Filter Component */}
      <Filter
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      {/* Loading Skeleton Grid */}
      {isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="rounded-2xl bg-slate-900/40 border border-slate-800/60 p-4 space-y-4 animate-pulse"
            >
              <div className="w-full aspect-square bg-slate-800/60 rounded-xl" />
              <div className="space-y-2">
                <div className="h-4 bg-slate-800/80 rounded w-3/4" />
                <div className="h-3 bg-slate-800/50 rounded w-1/2" />
                <div className="h-8 bg-slate-800/60 rounded-xl mt-4" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="p-8 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-center space-y-2 max-w-md mx-auto">
          <AlertCircle className="w-8 h-8 text-rose-400 mx-auto" />
          <h3 className="text-white font-semibold text-base">
            Failed to load products
          </h3>
          <p className="text-xs text-rose-300">
            Please check your connection or try again later.
          </p>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && !isError && products?.length === 0 && (
        <div className="text-center py-16 space-y-2">
          <p className="text-slate-400 text-sm">
            No products found matching your search or category.
          </p>
        </div>
      )}

      {/* Products Grid */}
      {!isLoading && !isError && products && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((val) => (
            <ProductCard key={val.id} product={val} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
