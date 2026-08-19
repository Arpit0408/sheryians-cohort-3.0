import React, { useState, useEffect } from 'react';
import { ShoppingBag, Star, Search, RefreshCw, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const { addToCart } = useCart();

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError('Failed to fetch products from FakeStore API.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Extract unique categories
  const categories = ['all', ...new Set(products.map((p) => p.category))];

  // Filter products by search and category
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8 pb-12">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Live Products Catalog</h1>
          <p className="text-slate-400 text-xs mt-1">
            Real-time items fetched from <code className="text-indigo-400 font-mono">fakestoreapi.com</code>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full sm:w-64 bg-[#0e1420] border border-slate-800 rounded-xl py-2 pl-9 pr-4 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

          {/* Refresh Button */}
          <button
            onClick={fetchProducts}
            disabled={loading}
            className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 text-xs font-medium flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
            title="Reload from API"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} /> Refresh
          </button>
        </div>
      </div>

      {/* Category Pills */}
      {!loading && !error && categories.length > 1 && (
        <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium capitalize transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-semibold'
                  : 'bg-[#0e1420] text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Loading Skeleton Grid */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <div
              key={n}
              className="p-5 rounded-2xl bg-[#0e1420]/80 border border-slate-800/80 animate-pulse space-y-4"
            >
              <div className="h-44 rounded-xl bg-slate-900/90" />
              <div className="h-4 bg-slate-800 rounded w-3/4" />
              <div className="h-3 bg-slate-800 rounded w-1/2" />
              <div className="flex justify-between items-center pt-2">
                <div className="h-5 bg-slate-800 rounded w-1/4" />
                <div className="h-8 bg-slate-800 rounded-xl w-1/3" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="max-w-md mx-auto p-6 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-center space-y-4 my-12">
          <AlertCircle className="w-10 h-10 text-rose-400 mx-auto" />
          <div>
            <h3 className="text-base font-bold text-white">Failed to load products</h3>
            <p className="text-slate-400 text-xs mt-1">{error}</p>
          </div>
          <button
            onClick={fetchProducts}
            className="px-4 py-2 rounded-xl bg-rose-600 text-white text-xs font-semibold hover:bg-rose-500 transition-colors"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Product Cards Grid */}
      {!loading && !error && (
        <>
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 text-slate-400">
              <p className="text-base font-medium">No products found matching your filter.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-3 text-xs text-indigo-400 font-semibold hover:underline"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="group rounded-2xl bg-[#0e1420]/80 border border-slate-800/80 overflow-hidden flex flex-col justify-between hover:border-indigo-500/50 transition-all hover:shadow-xl hover:shadow-indigo-500/10"
                >
                  <div className="p-5 flex flex-col items-center">
                    {/* Image Container */}
                    <div className="w-full h-48 rounded-xl bg-white p-4 flex items-center justify-center relative overflow-hidden mb-4 group-hover:scale-105 transition-transform">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>

                    {/* Metadata */}
                    <div className="w-full space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-semibold text-indigo-400 uppercase tracking-wider">
                        <span className="truncate max-w-[120px]">{item.category}</span>
                        <span className="flex items-center gap-1 text-amber-400">
                          <Star className="w-3 h-3 fill-amber-400" /> {item.rating?.rate || 4.5}
                        </span>
                      </div>

                      <h3 className="font-bold text-white text-sm line-clamp-2 leading-snug" title={item.title}>
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Bottom */}
                  <div className="p-4 bg-[#080b11]/80 border-t border-slate-800/80 flex items-center justify-between mt-auto">
                    <span className="text-lg font-extrabold text-white">${item.price}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 shadow-md shadow-indigo-600/20"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" /> Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
