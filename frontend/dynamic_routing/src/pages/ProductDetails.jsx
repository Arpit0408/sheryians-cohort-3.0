import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaArrowLeft, FaShoppingCart, FaBolt } from "react-icons/fa";
import { getSingleProducts } from "../api/products";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [prodata, setProdata] = useState(null);
  useEffect(() => {
    const fetchSingleProduct = async () => {
      const res = await getSingleProducts(id);
      setProdata(res.data);
    };
    fetchSingleProduct(id);
  }, [id]);
  console.log("prodata", prodata);

  if (!prodata) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-emerald-400 text-xl font-bold">
        Loading product details...
      </div>
    );
  }
  // Functionality (useParams, state, api call, etc.) aap khud likhoge
  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-emerald-400 transition-colors mb-8"
      >
        <FaArrowLeft className="text-xs" />
        Back to Products
      </Link>

      {/* Product Detail Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-10">
        {/* Left Column: Product Image Box */}
        <div className="w-full h-80 md:h-[450px] bg-white rounded-2xl p-8 flex items-center justify-center overflow-hidden">
          <img
            src={prodata.image}
            alt="Product placeholder"
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Right Column: Product Info */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Category */}
            <span className="inline-block bg-zinc-800 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              {prodata.category}
            </span>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              {prodata.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 text-sm">
              <span className="flex items-center gap-1.5 text-amber-400 font-semibold bg-zinc-800/80 px-2.5 py-1 rounded-lg">
                <FaStar className="text-xs" />
                {prodata.rating.rate}
              </span>
              <span className="text-zinc-500 font-medium">
                ({prodata.rating.count} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="pt-2">
              <span className="text-xs text-zinc-400 uppercase tracking-wide">
                Price
              </span>
              <p className="text-3xl font-extrabold text-white mt-1">
                $ {prodata.price}
              </p>
            </div>

            {/* Description */}
            <div className="pt-2">
              <h3 className="text-sm font-semibold text-zinc-300 mb-2">
                Description
              </h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                {prodata.description}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-zinc-800">
            <button
              type="button"
              className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/20 transition cursor-pointer"
            >
              <FaShoppingCart />
              Add to Cart
            </button>
            <button
              type="button"
              className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition cursor-pointer"
            >
              <FaBolt className="text-amber-400" />
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
