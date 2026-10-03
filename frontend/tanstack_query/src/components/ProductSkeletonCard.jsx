import React from "react";

const ProductSkeletonCard = () => {
  return (
    <div className="flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-sm animate-pulse dark:border-neutral-800 dark:bg-neutral-900">
      {/* Category Badge & Rating Skeleton */}
      <div className="mb-2 flex items-center justify-between">
        <div className="h-5 w-20 rounded-full bg-neutral-200 dark:bg-neutral-800" />
        <div className="h-4 w-14 rounded-md bg-neutral-200 dark:bg-neutral-800" />
      </div>

      {/* Image Skeleton */}
      <div className="my-2 flex h-48 w-full items-center justify-center rounded-xl bg-neutral-100 p-4 dark:bg-neutral-800/60">
        <div className="h-32 w-32 rounded-lg bg-neutral-200 dark:bg-neutral-700/60" />
      </div>

      {/* Title & Price Skeleton */}
      <div className="mt-2 flex flex-1 flex-col justify-between">
        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-neutral-200 dark:bg-neutral-800" />
          <div className="h-4 w-3/4 rounded bg-neutral-200 dark:bg-neutral-800" />
        </div>

        {/* Price & Button Skeleton */}
        <div className="mt-4 flex items-center justify-between pt-2 border-t border-neutral-100 dark:border-neutral-800">
          <div className="space-y-1">
            <div className="h-3 w-8 rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-5 w-16 rounded bg-neutral-200 dark:bg-neutral-800" />
          </div>

          <div className="h-8 w-18 rounded-xl bg-neutral-200 dark:bg-neutral-800" />
        </div>
      </div>
    </div>
  );
};

export default ProductSkeletonCard;
