import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./components/ProductCard";
export default function App() {
  const [products, setProducts] = useState(null);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const limit = 20;

  const getProducts = async () => {
    try {
      setLoading(true);
      let res = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`,
      );
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil((products?.total || 0) / limit);

  useEffect(() => {
    getProducts();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <div className="min-h-screen bg-slate-900 text-white p-4 md:p-8">
      {/* Header */}
      <div className="mb-6 flex flex-col items-center justify-between gap-4 sm:flex-row sm:px-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-100">
            Products Showcase
          </h1>
          {products?.total && (
            <p className="text-sm text-slate-400 mt-1">
              Showing page {page + 1} of {totalPages} ({products.total} total
              products)
            </p>
          )}
        </div>
      </div>

      {/* Loading state or Products Grid */}
      {loading ? (
        <div className="flex h-96 items-center justify-center">
          <div className="flex items-center gap-3 text-cyan-400">
            <svg
              className="h-6 w-6 animate-spin text-cyan-400"
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
            <span className="text-base font-medium text-slate-300">
              Loading products...
            </span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2 md:p-6">
          {products?.products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 pb-8">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            disabled={page === 0}
            className="flex items-center gap-1 rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2 text-sm font-medium text-slate-200 transition-all hover:bg-slate-700 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            ← Prev
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setPage(index)}
              className={`h-10 w-10 rounded-xl text-sm font-semibold transition-all ${
                page === index
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25 ring-2 ring-cyan-400/50"
                  : "border border-slate-700/80 bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setPage((prev) => Math.min(prev + 1, totalPages - 1))
            }
            disabled={page >= totalPages - 1}
            className="flex items-center gap-1 rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2 text-sm font-medium text-slate-200 transition-all hover:bg-slate-700 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
