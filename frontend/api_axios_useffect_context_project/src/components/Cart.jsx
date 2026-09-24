import React, { useContext } from "react";
import { FiShoppingCart, FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import MyContext from "../context/MyContext";
const Cart = () => {
  const { IncrementQunatity, DecrementQunatity, Cart, removeFromCart } =
    useContext(MyContext);

  const subtotal = Cart.reduce((acc, item) => {
    return acc + Number(item.price) * Number(item.quantity);
  }, 0);

  // Empty Cart State
  if (!Cart || Cart.length === 0) {
    return (
      <div className="container mx-auto px-6 py-20 flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-3xl mb-4 text-zinc-500 shadow-inner">
          <FiShoppingCart className="w-8 h-8 text-zinc-500" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">
          Your Cart is Empty
        </h2>
        <p className="text-sm text-zinc-400 max-w-sm">
          Looks like you haven't added anything to your cart yet. Go back to
          products and pick something!
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-800">
        <div>
          <h1 className="text-3xl font-bold text-white">Shopping Cart</h1>
          <p className="text-sm text-zinc-400 mt-1">
            Total items:{" "}
            <span className="text-indigo-400 font-semibold">{Cart.length}</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Cart Items List */}
        <div className="lg:col-span-2 space-y-4">
          {Cart.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-5 transition-all duration-200"
            >
              {/* Product Image */}
              <div className="w-24 h-24 bg-white rounded-xl p-2.5 flex items-center justify-center shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Product Info */}
              <div className="flex-1 min-w-0 text-center sm:text-left">
                <span className="text-[10px] uppercase font-bold tracking-wider text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-full">
                  {item.category}
                </span>
                <h3
                  className="text-base font-semibold text-white mt-1.5 truncate"
                  title={item.title}
                >
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
                  {item.description}
                </p>
                <div className="mt-2 text-sm font-bold text-indigo-400">
                  ${item.price}
                </div>
              </div>

              {/* Quantity & Actions UI (Pure Static) */}
              <div className="flex sm:flex-col items-center justify-between gap-4 shrink-0">
                <div className="flex items-center border border-zinc-700 bg-zinc-800/60 rounded-xl overflow-hidden">
                  <button
                    type="button"
                    className="w-8 h-8 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors cursor-pointer"
                    onClick={() => DecrementQunatity(item.id)}
                  >
                    <FiMinus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-8 text-center text-xs font-semibold text-white">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    className="w-8 h-8 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors cursor-pointer"
                    onClick={() => IncrementQunatity(item.id)}
                  >
                    <FiPlus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  type="button"
                  className="flex items-center gap-1 text-xs font-medium text-rose-400 hover:text-rose-300 transition-colors px-2.5 py-1.5 hover:bg-rose-500/10 rounded-lg cursor-pointer"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FiTrash2 className="w-3.5 h-3.5" />
                  <span>Remove</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Order Summary (Pure Static Values) */}
        <div className="lg:col-span-1">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sticky top-24">
            <h2 className="text-lg font-bold text-white mb-5 pb-3 border-b border-zinc-800">
              Order Summary
            </h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-zinc-400">
                <span>Subtotal</span>
                <span className="text-white font-medium">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Estimated Shipping</span>
                <span className="text-white font-medium">$0.00</span>
              </div>
              <div className="pt-4 border-t border-zinc-800 flex justify-between text-base font-bold text-white">
                <span>Total</span>
                <span className="text-indigo-400">${subtotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="button"
              className="w-full mt-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-all duration-200 active:scale-[0.98] cursor-pointer shadow-lg shadow-indigo-600/30"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
