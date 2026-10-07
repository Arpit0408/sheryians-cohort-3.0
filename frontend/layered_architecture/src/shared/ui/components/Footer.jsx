import React from "react";
import { Link } from "react-router";
import {
  ShoppingBag,
  Globe,
  Mail,
  Send,
  Heart,
  ShieldCheck,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-slate-950/90 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link to="/main" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                NexStore
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Curating high quality everyday essentials and electronics with
              seamless shopping experiences.
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs text-slate-400">
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800">
                <Globe className="w-3.5 h-3.5 text-indigo-400" />
                <span>Worldwide Delivery</span>
              </div>
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Secure</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/main"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/main/product"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Shop Catalog
                </Link>
              </li>
              <li>
                <Link
                  to="/main/about"
                  className="hover:text-indigo-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/main/orders"
                  className="hover:text-indigo-400 transition-colors"
                >
                  My Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Policies */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Customer Care
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#help"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#shipping"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a
                  href="#returns"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Updates */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Stay in the loop
            </h4>
            <p className="text-sm text-slate-400">
              Subscribe to get special offers, free giveaways, and
              once-in-a-lifetime deals.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3.5 py-2 bg-slate-900 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-medium transition-colors cursor-pointer"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
