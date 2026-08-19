import React from 'react';
import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-[#080b11]/60 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold">
            <Zap className="w-3 h-3" />
          </div>
          <span className="font-semibold text-slate-300">SkyMart Inc.</span> &copy; {new Date().getFullYear()}
        </div>
        <div>
          Crafted with React, React Router & Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
