import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft } from 'lucide-react';

export default function Cart() {
  return (
    <div className="max-w-3xl mx-auto text-center py-16 space-y-6">
      <div className="w-20 h-20 mx-auto rounded-3xl bg-[#0e1420] border border-slate-800 flex items-center justify-center text-slate-400">
        <ShoppingBag className="w-10 h-10 text-indigo-400" />
      </div>
      <h1 className="text-3xl font-bold text-white tracking-tight">Your Cart is Empty</h1>
      <p className="text-slate-400 text-sm max-w-md mx-auto">
        Looks like you haven't added any products to your cart yet. Explore our latest items and grab something awesome!
      </p>
      <div>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Start Shopping
        </Link>
      </div>
    </div>
  );
}
