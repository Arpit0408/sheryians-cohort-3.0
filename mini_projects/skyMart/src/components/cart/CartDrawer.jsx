import React from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalCount,
    totalPrice,
  } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    toast.success('Order placed successfully! Thank you for shopping with SkyMart.');
    clearCart();
    closeCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden selection:bg-indigo-500 selection:text-white">
      {/* Dark Backdrop Overlay */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
      />

      {/* Slide-over Right Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0e1420] border-l border-slate-800 text-slate-100 shadow-2xl flex flex-col justify-between relative overflow-hidden">
          
          {/* Drawer Header */}
          <div className="p-6 border-b border-slate-800/80 flex items-center justify-between bg-[#080b11]/60">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white tracking-tight">Your Shopping Cart</h2>
                <p className="text-xs text-slate-400">{totalCount} {totalCount === 1 ? 'item' : 'items'} selected</p>
              </div>
            </div>
            
            <button
              onClick={closeCart}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close Cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-slate-400 my-12">
                <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Your cart is empty</h3>
                  <p className="text-xs text-slate-400 mt-1 max-w-xs">
                    Explore our products catalog and add your favorite items.
                  </p>
                </div>
                <Link
                  to="/products"
                  onClick={closeCart}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all shadow-md shadow-indigo-600/30"
                >
                  Explore Products
                </Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-[#090d16] border border-slate-800/80 flex gap-4 items-center group hover:border-slate-700 transition-all"
                >
                  {/* Item Image */}
                  <div className="w-16 h-16 rounded-xl bg-white p-2 flex items-center justify-center shrink-0">
                    <img
                      src={item.image || 'https://via.placeholder.com/64'}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  {/* Item Info */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <h4 className="text-xs font-bold text-white truncate" title={item.title}>
                      {item.title}
                    </h4>
                    <div className="text-xs font-extrabold text-indigo-400">
                      ${item.price.toFixed(2)}
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 pt-1">
                      <div className="inline-flex items-center rounded-lg bg-slate-900 border border-slate-800 p-0.5">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:text-white text-slate-400 transition-colors"
                          aria-label="Decrease Quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-white">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:text-white text-slate-400 transition-colors"
                          aria-label="Increase Quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1.5 text-slate-500 hover:text-rose-400 transition-colors ml-auto"
                        aria-label="Remove Item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer (Summary & Checkout) */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-slate-800/80 bg-[#080b11] space-y-4">
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-200">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Shipping</span>
                  <span className="font-semibold text-emerald-400">FREE</span>
                </div>
                <div className="flex items-center justify-between text-sm font-bold text-white pt-2 border-t border-slate-800/60">
                  <span>Total</span>
                  <span className="text-indigo-400 text-lg">${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2">
                <button
                  onClick={clearCart}
                  className="col-span-1 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-rose-400 text-xs font-semibold transition-all flex items-center justify-center"
                  title="Clear Cart"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button
                  onClick={handleCheckout}
                  className="col-span-3 py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all active:scale-[0.99] cursor-pointer"
                >
                  Checkout Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
