import React from "react";
import { FiShoppingCart, FiStar } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ item }) => {
  const { setCart } = useContext(CartContext);
  const product = item;

  const handleAddToCart = () => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div className="w-72 bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-zinc-700 transition-all duration-300 flex flex-col group">
      {/* Product Image Container */}
      <div className="relative w-full h-56 bg-white flex items-center justify-center p-6 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-zinc-900/80 backdrop-blur-md text-zinc-300 text-xs font-medium px-2.5 py-1 rounded-full capitalize">
          {product.category}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1 text-amber-400 text-xs font-semibold mb-2">
            <FiStar className="fill-amber-400 text-sm" />
            <span>{product.rating?.rate ?? 4.0}</span>
            <span className="text-zinc-500 font-normal">
              ({product.rating?.count ?? 0} reviews)
            </span>
          </div>

          {/* Title */}
          <h3
            className="text-base font-semibold text-white line-clamp-1 group-hover:text-emerald-400 transition-colors duration-200"
            title={product.title}
          >
            {product.title}
          </h3>

          {/* Description */}
          <p className="text-xs text-zinc-400 line-clamp-2 mt-1.5 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Footer: Price & Add to Cart Button */}
        <div className="flex items-center justify-between pt-2 border-t border-zinc-800/80">
          <div>
            <span className="text-xs text-zinc-400 block">Price</span>
            <span className="text-xl font-bold text-white">
              ${Number(product.price).toFixed(2)}
            </span>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            className="flex items-center gap-2 px-3.5 py-2 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white text-xs font-semibold rounded-xl shadow-md transition-all duration-200 cursor-pointer"
          >
            <FiShoppingCart className="text-sm" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
