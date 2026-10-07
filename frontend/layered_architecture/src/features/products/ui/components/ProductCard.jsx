import React from "react";
import { Star, ShoppingCart, Heart } from "lucide-react";

const ProductCard = ({ product }) => {
  if (!product) return null;

  const {
    id,
    title,
    description,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    thumbnail,
  } = product;

  const originalPrice = discountPercentage
    ? (price / (1 - discountPercentage / 100)).toFixed(2)
    : null;

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 overflow-hidden">
      <div className="relative w-full aspect-square bg-slate-950/60 flex items-center justify-center p-4 overflow-hidden">
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {discountPercentage > 0 && (
            <span className="px-2 py-0.5 rounded-md bg-rose-500/20 border border-rose-500/30 text-rose-400 text-[11px] font-bold tracking-tight">
              -{Math.round(discountPercentage)}%
            </span>
          )}
          {stock <= 5 && stock > 0 && (
            <span className="px-2 py-0.5 rounded-md bg-amber-500/20 border border-amber-500/30 text-amber-300 text-[10px] font-semibold">
              Low Stock
            </span>
          )}
        </div>

        <button
          type="button"
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-rose-400 hover:border-rose-500/40 transition-all duration-200 cursor-pointer"
        >
          <Heart className="w-4 h-4 hover:scale-110 transition-transform" />
        </button>

        <img
          src={thumbnail}
          alt={title}
          loading="lazy"
          className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-108"
        />
      </div>

      <div className="flex flex-col flex-1 p-4 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="uppercase font-semibold tracking-wider text-indigo-400/90 text-[11px]">
            {brand || category}
          </span>

          <div className="flex items-center gap-1 bg-slate-800/70 border border-slate-700/50 px-2 py-0.5 rounded-full text-slate-200">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-[11px]">
              {rating ? rating.toFixed(1) : "4.5"}
            </span>
          </div>
        </div>

        <h3
          className="font-semibold text-white text-sm line-clamp-1 group-hover:text-indigo-300 transition-colors"
          title={title}
        >
          {title}
        </h3>

        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed flex-1">
          {description}
        </p>

        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-bold text-white tracking-tight">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-xs text-slate-500 line-through font-normal">
                ${originalPrice}
              </span>
            )}
          </div>

          <button
            type="button"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white shadow-md shadow-indigo-600/30 transition-all duration-200 cursor-pointer"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
