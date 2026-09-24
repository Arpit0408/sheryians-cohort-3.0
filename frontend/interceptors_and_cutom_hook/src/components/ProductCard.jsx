import React from "react";
import { FiShoppingCart, FiStar } from "react-icons/fi";

const ProductCard = ({ product }) => {
  const { title, price, description, category, image, rating } = product;

  return (
    <div className="group bg-neutral-900/90 border border-neutral-800 hover:border-indigo-500/50 rounded-2xl p-4 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 flex flex-col justify-between backdrop-blur-sm">
      <div>
        {/* Product Image Box */}
        <div className="relative w-full h-48 bg-white/95 rounded-xl p-4 flex items-center justify-center overflow-hidden mb-4">
          <img
            src={image}
            alt={title}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />

          {/* Category Badge */}
          <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-lg text-[10px] font-semibold tracking-wider uppercase bg-neutral-900/80 backdrop-blur-sm text-neutral-200 border border-neutral-700/50">
            {category}
          </span>
        </div>

        {/* Rating & Reviews */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium">
            <FiStar className="fill-amber-400 text-amber-400 text-xs" />
            <span>{rating?.rate || 0}</span>
          </div>

          <span className="text-[11px] text-neutral-500">
            {rating?.count || 0} reviews
          </span>
        </div>

        {/* Product Title */}
        <h3
          className="font-semibold text-white text-sm line-clamp-2 mb-1.5 group-hover:text-indigo-400 transition-colors"
          title={title}
        >
          {title}
        </h3>

        {/* Short Description */}
        <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Price & Action Button Footer */}
      <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between gap-3">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">
            Price
          </span>
          <span className="text-lg font-bold text-white tracking-tight">
            ${price}
          </span>
        </div>

        <button className="flex items-center gap-2 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white text-xs font-medium rounded-xl transition-all duration-200 shadow-md shadow-indigo-600/20 cursor-pointer">
          <FiShoppingCart className="text-sm" />
          <span>Add</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
