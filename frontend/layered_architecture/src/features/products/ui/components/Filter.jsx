import React from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import {
  useAllCategories,
  useGetProductByCategory,
} from "../../hook/useProductHooks";

const Filter = ({ search, setSearch, category, setCategory }) => {
  let { data, isPending, errors } = useAllCategories();

  console.log("my categories data", data);

  if (isPending) return "Loading Categories";

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-3 sm:p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80">
      <div className="relative flex-1 max-w-full sm:max-w-md">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by title, brand, or keyword..."
          className="w-full pl-10 pr-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition-all"
        />
      </div>

      <div className="relative w-full sm:w-64">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
          <SlidersHorizontal className="w-4 h-4 text-indigo-400" />
        </div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full pl-10 pr-8 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition-all appearance-none cursor-pointer"
        >
          <option value="" className="bg-slate-900 text-slate-200">
            All Categories
          </option>
          {data.map((cate) => (
            <option value={cate} className="bg-slate-900 text-slate-200">
              {cate}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Filter;
