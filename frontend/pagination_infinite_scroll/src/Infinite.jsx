import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { getAllProducts } from "./api/productApi";
import ProductCard from "./components/ProductCard";

const Infinite = () => {
  let limit = 40;

  let { data, isPending, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["products"],
      queryFn: ({ pageParam }) => getAllProducts(limit, pageParam),
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPage) => {
        let loadedData = allPage.length * limit;
        if (loadedData < lastPage.total) return loadedData;
        return undefined;
      },
    });

  if (isPending) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white">
        <div className="flex items-center gap-3">
          <svg
            className="h-7 w-7 animate-spin text-cyan-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
          <span className="text-lg font-medium text-slate-300">
            Loading products...
          </span>
        </div>
      </div>
    );
  }

  console.log(data);

  let allProducts = data?.pages?.flatMap((val) => val.products) ?? [];
  let totalCount = data?.pages?.[0]?.total || 0;

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header Section */}
      <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-900/90 backdrop-blur-md px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white">
              Infinite Products
            </h1>
            <p className="text-xs md:text-sm text-slate-400">
              Showing{" "}
              <span className="font-semibold text-cyan-400">
                {allProducts.length}
              </span>{" "}
              of <span className="font-semibold text-slate-200">{totalCount}</span> items
            </p>
          </div>

          <div className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-400">
            Infinite Scroll Mode
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {allProducts.map((val) => (
            <ProductCard key={val.id} product={val} />
          ))}
        </div>

        {/* Load More Section */}
        <div className="mt-12 flex flex-col items-center justify-center pb-12">
          {hasNextPage ? (
            <button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              className="group relative flex items-center gap-2.5 rounded-xl border border-cyan-500/30 bg-slate-800 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/10 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:bg-slate-700/80 hover:shadow-cyan-500/20 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isFetchingNextPage ? (
                <>
                  <svg
                    className="h-4 w-4 animate-spin text-cyan-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  <span>Loading more items...</span>
                </>
              ) : (
                <>
                  <span>Load more products</span>
                  <span className="text-cyan-400 transition-transform duration-200 group-hover:translate-y-0.5">
                    ↓
                  </span>
                </>
              )}
            </button>
          ) : (
            <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-800/60 px-5 py-2 text-xs font-medium text-slate-400">
              <span>✓</span>
              <span>You've reached the end! All {totalCount} products loaded.</span>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Infinite;
