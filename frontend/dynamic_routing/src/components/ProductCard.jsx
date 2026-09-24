import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  if (!product) return null;

  const { id, title, price, category, image, rating } = product;

  return (
    <div className="group flex flex-col justify-between bg-zinc-900 border border-zinc-800 rounded-2xl p-4 hover:border-zinc-700 hover:shadow-xl hover:shadow-emerald-950/20 transition-all duration-300">
      <div>
        {/* Product Image Container */}
        <div className="w-full h-52 bg-white rounded-xl p-4 flex items-center justify-center overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <span className="absolute top-2 left-2 bg-zinc-900/80 backdrop-blur-sm text-zinc-300 text-[10px] font-medium px-2 py-0.5 rounded-full uppercase tracking-wider">
            {category}
          </span>
        </div>

        {/* Details */}
        <div className="mt-4 space-y-2">
          {/* Rating */}
          {rating && (
            <div className="flex items-center gap-1.5 text-xs">
              <span className="flex items-center gap-1 text-amber-400 font-medium">
                <FaStar className="text-xs" />
                {rating.rate}
              </span>
              <span className="text-zinc-500">({rating.count} reviews)</span>
            </div>
          )}

          {/* Title */}
          <h2
            title={title}
            className="text-sm font-semibold text-zinc-100 line-clamp-2 group-hover:text-emerald-400 transition-colors leading-snug"
          >
            {title}
          </h2>
        </div>
      </div>

      {/* Footer: Price & Action */}
      <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
        <div>
          <p className="text-[11px] text-zinc-400">Price</p>
          <p className="text-lg font-bold text-white">${price}</p>
        </div>

        {/* Dynamic Route Link */}
        <Link
          to={`/products/${id}`}
          className="px-3.5 py-1.5 text-xs font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
