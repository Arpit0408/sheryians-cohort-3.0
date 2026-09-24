import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LuHouse, LuArrowRight } from 'react-icons/lu'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
      <h1 className="text-4xl font-bold flex items-center gap-3 text-slate-100">
        <LuHouse className="text-indigo-400" />
        <span>Home Page</span>
      </h1>

      {/* useNavigate Example */}
      <button
        onClick={() => navigate('/about')}
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-indigo-600/20"
      >
        <span>Explore About Page (useNavigate)</span>
        <LuArrowRight className="w-4 h-4" />
      </button>
    </div>
  )
}
