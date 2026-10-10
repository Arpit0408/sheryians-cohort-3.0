export default function ProductCard({ product }) {
  if (!product) return null;

  const {
    title,
    description,
    category,
    brand,
    price,
    discountPercentage,
    rating,
    stock,
    availabilityStatus,
    thumbnail,
    shippingInformation,
  } = product;

  const originalPrice = discountPercentage
    ? (price / (1 - discountPercentage / 100)).toFixed(2)
    : null;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-800/80 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-600 hover:shadow-xl hover:shadow-cyan-500/10">
      <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-900/60">
        <img
          src={thumbnail}
          alt={title}
          loading="lazy"
          className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
        {discountPercentage && (
          <span className="absolute top-3 left-3 rounded-full bg-rose-500/90 px-2.5 py-0.5 text-xs font-semibold text-white shadow-sm backdrop-blur-md">
            -{Math.round(discountPercentage)}%
          </span>
        )}
        {category && (
          <span className="absolute top-3 right-3 rounded-full bg-slate-950/70 px-2.5 py-0.5 text-xs font-medium text-slate-300 capitalize backdrop-blur-md border border-slate-700/50">
            {category}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 flex items-center justify-between text-xs text-slate-400">
          <span className="font-medium tracking-wide uppercase text-slate-400 truncate max-w-[60%]">
            {brand || category || "General"}
          </span>
          <div className="flex items-center gap-1 text-amber-400 font-medium">
            <svg
              className="h-3.5 w-3.5 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>{rating?.toFixed(1) || "N/A"}</span>
          </div>
        </div>
        <h3 className="line-clamp-1 text-base font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs text-slate-400 leading-relaxed">
          {description}
        </p>
        <div className="mt-auto pt-4 flex items-end justify-between border-t border-slate-700/50">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-bold text-slate-100">
                ${price?.toFixed(2)}
              </span>
              {originalPrice && (
                <span className="text-xs text-slate-500 line-through">
                  ${originalPrice}
                </span>
              )}
            </div>
            {shippingInformation && (
              <p className="text-[10px] text-slate-400">
                {shippingInformation}
              </p>
            )}
          </div>

          <span
            className={`text-[11px] font-medium px-2 py-0.5 rounded-md ${
              availabilityStatus === "In Stock" || stock > 10
                ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
                : "bg-amber-500/15 text-amber-400 border border-amber-500/20"
            }`}
          >
            {availabilityStatus ||
              (stock > 0 ? `${stock} in stock` : "Out of stock")}
          </span>
        </div>
      </div>
    </div>
  );
}
