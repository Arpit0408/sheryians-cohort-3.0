import React from "react";
import { FiTrash2, FiArrowLeft, FiShield, FiArrowRight } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const Cart = () => {
  const { setShowCart, Cart, setCart } = useContext(CartContext);

  const clearCart = () => {
    setCart([]);
  };

  const DeleteItem = (id) => {
    const deleteItem = Cart.filter((pro) => pro.id !== id);
    setCart(deleteItem);
  };
  const OrderSummary = () => {
    let total = 0;
    total = Cart.reduce((pre, curr) => pre + curr.price, 0);
    return total;
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800 mb-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowCart(false)}
            type="button"
            className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-200 cursor-pointer"
            title="Back to products"
          >
            <FiArrowLeft className="text-lg" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Shopping Cart
            </h1>
            <p className="text-xs text-zinc-400 mt-0.5">Items in your cart</p>
          </div>
        </div>

        <button
          type="button"
          className="self-start sm:self-auto text-xs text-zinc-400 hover:text-red-400 transition-colors duration-200 flex items-center gap-1.5 cursor-pointer px-3 py-1.5 rounded-lg hover:bg-red-500/10"
          onClick={clearCart}
        >
          <FiTrash2 className="text-sm" />
          <span>Clear All</span>
        </button>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start overflow-hidden">
        {/* Cart Items List */}
        <div className="lg:col-span-2 space-y-4 overflow-y-auto">
          {/* Cart Items List */}
          {Cart.map((pro, index) => {
            return (
              <div key={index}>
                {/* Sample Cart Item UI (Replace / Map with your data) */}
                <div className="flex items-center gap-4 p-4 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-zinc-700/80 transition-all duration-200">
                  {/* Image */}
                  <div className="w-20 h-20 bg-white rounded-xl p-2.5 flex items-center justify-center shrink-0 overflow-hidden">
                    <img
                      src={pro.image}
                      alt="Product"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <span className="inline-block text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full capitalize mb-1">
                      {pro.category}
                    </span>
                    <h3 className="text-sm font-semibold text-white truncate">
                      {pro.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-0.5 line-clamp-1">
                      {pro.description}
                    </p>
                    <div className="mt-2 text-sm font-bold text-white">
                      ${pro.price}
                    </div>
                  </div>

                  {/* Delete Button */}
                  <button
                    type="button"
                    className="p-2.5 rounded-xl text-zinc-500 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200 cursor-pointer"
                    title="Remove item"
                    onClick={() => DeleteItem(pro.id)}
                  >
                    <FiTrash2 className="text-lg" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Order Summary Panel */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl">
          <h2 className="text-lg font-bold text-white mb-5 pb-3 border-b border-zinc-800">
            Order Summary
          </h2>

          <div className="space-y-3.5 text-sm">
            <div className="flex justify-between text-zinc-400">
              <span>Subtotal</span>
              <span className="font-semibold text-white">
                ${OrderSummary().toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between text-zinc-400">
              <span>Shipping Estimate</span>
              <span className="font-semibold text-emerald-400">FREE</span>
            </div>

            <div className="pt-4 border-t border-zinc-800 flex justify-between items-baseline">
              <span className="text-base font-semibold text-white">
                Total Amount
              </span>
              <span className="text-2xl font-extrabold text-emerald-400">
                ${OrderSummary().toFixed(2)}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="w-full mt-6 py-3.5 px-4 bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
          >
            <span>Proceed to Checkout</span>
            <FiArrowRight className="text-base" />
          </button>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-zinc-500">
            <FiShield className="text-sm text-emerald-400" />
            <span>Secure checkout & 30-day money-back guarantee</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
