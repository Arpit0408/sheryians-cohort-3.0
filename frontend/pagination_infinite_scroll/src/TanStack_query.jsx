import React, { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getAllProducts } from "./api/productApi";
import ProductCard from "./components/ProductCard";
const TanStack = () => {
  let limit = 20;
  const [page, setPage] = useState(0);
  let { data, isPending, isError, isPlaceholderData } = useQuery({
    queryKey: ["products", page],
    queryFn: () => getAllProducts(limit, page),
    placeholderData: keepPreviousData,
  });

  if (isPending) return <h1>Loading</h1>;

  if (isError) return <h1>Something went wrong</h1>;

  let totalPages = Math.ceil(data.total / limit);
  return (
    <>
      <div className="min-h-screen bg-slate-900 text-white p-4 md:p-8">
        {/* Header */}
        <div className="mb-6 flex flex-col items-center justify-between gap-4 sm:flex-row sm:px-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-100">
              Products Showcase
            </h1>
          </div>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2 md:p-6"
          style={{ opacity: isPlaceholderData ? 0.3 : 1 }}
        >
          {data?.products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex gap-5 items-center">
          <button
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
            className="p-3 bg-red-700 text-white rounded-xl"
          >
            Prev
          </button>
          <p>
            page {page + 1} of {totalPages}
          </p>
          <button
            disabled={page >= totalPages - 1}
            onClick={() => setPage(page + 1)}
            className="p-3 bg-red-700 text-white rounded-xl"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default TanStack;
