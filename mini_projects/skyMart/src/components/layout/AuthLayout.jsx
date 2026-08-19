import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Sparkles, Star } from 'lucide-react';

export default function AuthLayout({ children, badgeText, title, titleHighlight, subtitle }) {
  return (
    <div className="min-h-screen bg-[#080b11] text-slate-100 flex flex-col justify-between p-6 sm:p-8 lg:p-12 relative overflow-hidden selection:bg-indigo-500 selection:text-white">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Logo */}
      <header className="w-full max-w-7xl mx-auto flex items-center justify-between z-10">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 flex items-center justify-center text-white shadow-xl shadow-indigo-500/25 group-hover:scale-105 transition-transform">
            <Zap className="w-6 h-6 fill-white" />
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-white">
            Sky<span className="text-indigo-400">Mart</span>
          </span>
        </Link>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-7xl mx-auto my-auto py-6 lg:py-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10">
        
        {/* Left Hero Section: Hidden on mobile/tablet (hidden lg:flex), Visible on Desktop */}
        <div className="hidden lg:flex flex-col justify-between space-y-8">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> {badgeText}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              {title} <br />
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                {titleHighlight}
              </span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg max-w-lg leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-[#0f172a]/70 border border-slate-800/80 text-center backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">20K+</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Products</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#0f172a]/70 border border-slate-800/80 text-center backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">50K+</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Users</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#0f172a]/70 border border-slate-800/80 text-center backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 tracking-tight flex items-center justify-center gap-1">
                4.9 <Star className="w-5 h-5 fill-amber-400 text-amber-400 inline" />
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">Rating</div>
            </div>
          </div>
        </div>

        {/* Right Form Slot: Always Visible (Centered on Mobile) */}
        <div className="flex justify-center lg:justify-end w-full">
          {children}
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto text-xs text-slate-600 text-center sm:text-left z-10">
        &copy; {new Date().getFullYear()} SkyMart Inc. All rights reserved.
      </footer>
    </div>
  );
}
