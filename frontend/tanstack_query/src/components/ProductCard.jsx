import React from "react";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";

const ProductCard = ({ product }) => {
  const { title, price, category, image, rating } = product || {};

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
      {/* Category Badge & Favorite/Tag */}
      <div className="mb-2 flex items-center justify-between">
        <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium capitalize text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
          {category || "General"}
        </span>
        {rating && (
          <div className="flex items-center gap-1 text-xs font-semibold text-amber-500">
            <AiFillStar className="h-4 w-4 fill-amber-400" />
            <span>{rating.rate}</span>
            <span className="text-neutral-400 font-normal">
              ({rating.count})
            </span>
          </div>
        )}
      </div>

      {/* Image Container */}
      <div className="relative my-2 flex h-48 w-full items-center justify-center overflow-hidden rounded-xl bg-white p-4">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="mt-2 flex flex-1 flex-col justify-between">
        <div>
          <h3
            title={title}
            className="line-clamp-2 text-sm font-semibold text-neutral-800 transition-colors group-hover:text-black dark:text-neutral-100 dark:group-hover:text-white"
          >
            {title}
          </h3>
        </div>

        {/* Price & Action Button */}
        <div className="mt-4 flex items-center justify-between pt-2 border-t border-neutral-100 dark:border-neutral-800">
          <div>
            <span className="text-xs text-neutral-400 block font-medium">
              Price
            </span>
            <span className="text-lg font-bold text-neutral-900 dark:text-white">
              ${price?.toFixed(2)}
            </span>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-xl bg-neutral-900 px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-neutral-800 active:scale-95 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            <AiOutlineShoppingCart className="h-4 w-4" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
