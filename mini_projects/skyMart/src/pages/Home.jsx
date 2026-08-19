import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { ShoppingBag, ArrowRight, Sparkles, ShieldCheck, Zap, Star } from 'lucide-react';

export default function Home() {
  const { user } = useAuth();
  const { addToCart } = useCart();

  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=4');
        if (response.ok) {
          const data = await response.json();
          setFeaturedProducts(data);
        }
      } catch (error) {
        console.error('Error fetching top products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopProducts();
  }, []);

  return (
    <div className="space-y-12 pb-12">
      {/* Hero Welcome Banner */}
      <section className="relative overflow-hidden pt-12 pb-16 px-6 sm:px-12 rounded-3xl bg-gradient-to-b from-indigo-900/30 via-[#0e1420] to-[#080b11] border border-slate-800/80 shadow-2xl">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Authenticated Dashboard
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Welcome back, <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              {user?.fullName || 'Valued Customer'}!
            </span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
            Your personal SkyMart hub is ready. Explore our latest electronics, track your orders, or manage your wishlist.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/products"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all hover:scale-105"
            >
              Browse Catalog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-[#0e1420]/80 border border-slate-800/80 flex items-start gap-4">
          <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Instant Dispatch</h3>
            <p className="text-xs text-slate-400 mt-1">Orders placed before 2 PM ship same day worldwide.</p>
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-[#0e1420]/80 border border-slate-800/80 flex items-start gap-4">
          <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-white">2-Year Warranty</h3>
            <p className="text-xs text-slate-400 mt-1">Hassle-free replacement guarantee on all hardware.</p>
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-[#0e1420]/80 border border-slate-800/80 flex items-start gap-4">
          <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Member Benefits</h3>
            <p className="text-xs text-slate-400 mt-1">Earn 5% SkyPoints on every order as an active user.</p>
          </div>
        </div>
      </section>

      {/* Featured Products Showcase (Live FakeStore API) */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Featured Collections</h2>
            <p className="text-slate-400 text-xs mt-0.5">Top trending items live from FakeStore API</p>
          </div>
          <Link
            to="/products"
            className="text-indigo-400 hover:text-indigo-300 text-xs font-semibold flex items-center gap-1 hover:underline"
          >
            View All Catalog <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="p-5 rounded-2xl bg-[#0e1420]/80 border border-slate-800/80 animate-pulse space-y-4">
                <div className="h-40 rounded-xl bg-slate-900/90" />
                <div className="h-4 bg-slate-800 rounded w-3/4" />
                <div className="h-3 bg-slate-800 rounded w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map((item) => (
              <div
                key={item.id}
                className="group p-5 rounded-2xl bg-[#0e1420]/80 border border-slate-800/80 hover:border-indigo-500/50 transition-all hover:-translate-y-1 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 rounded-xl bg-white p-4 flex items-center justify-center relative overflow-hidden mb-4 group-hover:scale-105 transition-transform">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-indigo-400 uppercase tracking-wider">
                      <span className="truncate max-w-[100px]">{item.category}</span>
                      <span className="flex items-center gap-1 text-amber-400">
                        <Star className="w-3 h-3 fill-amber-400" /> {item.rating?.rate || 4.5}
                      </span>
                    </div>
                    <h3 className="font-bold text-white text-sm line-clamp-2 leading-snug" title={item.title}>
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-base font-extrabold text-white">${item.price}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-md shadow-indigo-600/20"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" /> Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}