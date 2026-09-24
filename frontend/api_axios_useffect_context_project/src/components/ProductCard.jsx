import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";
import MyContext from "../context/MyContext";

const ProductCard = ({ product, isInCart }) => {
  const { title, price, description, category, image, rating, id } = product;

  const { IncrementQunatity, DecrementQunatity, setCart } =
    useContext(MyContext);

  const handleAddCart = () => {
    setCart((prev) => [...prev, { ...product, quantity: 1 }]);
  };
  return (
    <div className="w-72 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/50 hover:-translate-y-1">
      {/* Top Section: Category & Rating */}
      <div>
        <div className="w-full h-52 bg-white rounded-xl p-4 flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Category Badge & Rating */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-[11px] uppercase tracking-wider font-semibold text-cyan-400 bg-cyan-400/10 px-2.5 py-0.5 rounded-full">
            {category}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-amber-400 font-medium">
            <FaStar className="w-3.5 h-3.5" />
            <span>{rating?.rate}</span>
            <span className="text-zinc-500">({rating?.count})</span>
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-sm font-semibold text-white mt-2.5 line-clamp-1 title"
          title={title}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom Section: Price & Button */}
      <div className="pt-4 mt-3 border-t border-zinc-800 flex items-center justify-between">
        <div>
          <span className="text-xs text-zinc-500 block">Price</span>
          <span className="text-lg font-bold text-white">${price}</span>
        </div>

        {isInCart ? (
          <div className="flex items-center border border-indigo-500/40 bg-indigo-950/40 rounded-xl overflow-hidden shadow-sm">
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center text-indigo-300 hover:text-white hover:bg-indigo-600/30 active:scale-90 transition-all cursor-pointer"
              onClick={() => DecrementQunatity(id)}
            >
              <FiMinus className="w-3.5 h-3.5" />
            </button>
            <span className="px-2.5 text-xs font-bold text-white text-center select-none">
              {isInCart.quantity || 1}
            </span>
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center text-indigo-300 hover:text-white hover:bg-indigo-600/30 active:scale-90 transition-all cursor-pointer"
              onClick={() => IncrementQunatity(id)}
            >
              <FiPlus className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition-all duration-200 active:scale-95 cursor-pointer shadow-md shadow-indigo-600/20"
            onClick={handleAddCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
