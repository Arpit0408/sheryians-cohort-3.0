import React from "react";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";

const ProductCard = ({ product }) => {
  const {
    title,
    price,
    category,
    thumbnail,
    images,
    image,
    rating,
    discountPercentage,
    brand,
  } = product || {};

  const displayImage = thumbnail || (images && images[0]) || image;

  const rateValue =
    typeof rating === "object"
      ? rating?.rate
      : typeof rating === "number"
        ? rating
        : null;
  const countValue = typeof rating === "object" ? rating?.count : null;

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mb-2 flex items-center justify-between">
        <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium capitalize text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
          {category || "General"}
        </span>
        {rateValue !== null && (
          <div className="flex items-center gap-1 text-xs font-semibold text-amber-500">
            <AiFillStar className="h-4 w-4 fill-amber-400" />
            <span>{Number(rateValue).toFixed(1)}</span>
            {countValue && (
              <span className="text-neutral-400 font-normal">
                ({countValue})
              </span>
            )}
          </div>
        )}
      </div>

      <div className="relative my-2 flex h-48 w-full items-center justify-center overflow-hidden rounded-xl bg-neutral-50 p-4 dark:bg-neutral-800/40">
        <img
          src={displayImage}
          alt={title}
          loading="lazy"
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
        {discountPercentage && (
          <span className="absolute top-2 left-2 rounded-md bg-rose-500 px-2 py-0.5 text-[10px] font-bold text-white shadow-sm">
            {Math.round(discountPercentage)}% OFF
          </span>
        )}
      </div>

      <div className="mt-2 flex flex-1 flex-col justify-between">
        <div>
          {brand && (
            <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-400">
              {brand}
            </p>
          )}
          <h3
            title={title}
            className="line-clamp-2 text-sm font-semibold text-neutral-800 transition-colors group-hover:text-black dark:text-neutral-100 dark:group-hover:text-white"
          >
            {title}
          </h3>
        </div>

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
