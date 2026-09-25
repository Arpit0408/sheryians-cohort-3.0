import React, { useEffect, useState } from "react";
import axios from "axios";

const Debouncing = () => {
  const [ProductsData, setProductsData] = useState([]);
  const [Search, setSearch] = useState("");

  const prodata = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProductsData(res.data);
  };

  // debounce
  const filterData = () => {
    if (Search) {
      const filter = ProductsData.filter((pro) => {
        return pro.title.toLowerCase().includes(Search.toLowerCase());
      });
      setProductsData(filter);
    }
  };

  useEffect(() => {
    const Timer = setTimeout(() => {
      console.log("debouncing running");
      filterData();
    }, 1000);
    return () => clearTimeout(Timer);
  }, [Search]);

  useEffect(() => {
    prodata();
  }, []);

  // throttling
  let throttle = false;
  useEffect(() => {
    const handleScroll = () => {
      // console.log(window.scrollY);
      if (throttle) return;
      throttle = true;
      console.log("scroll triggered...");
      setTimeout(() => {
        throttle = false;
      }, 5000);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-2xl space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Debouncing Products
          </h1>
          <p className="text-sm text-slate-400">
            Type to search with 1s debounced filtering
          </p>
        </div>

        <div>
          <input
            className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 shadow-lg text-sm"
            type="text"
            placeholder="Search Products...."
            value={Search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>

        <div className="space-y-2.5">
          {ProductsData.map((pro) => {
            return (
              <div
                key={pro.id}
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900 transition-all duration-150"
              >
                <h2 className="text-sm font-medium text-slate-200">
                  {pro.title}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Debouncing;
