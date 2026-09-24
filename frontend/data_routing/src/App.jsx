import { Routes, Route, Link } from 'react-router-dom'
import { FaReact } from 'react-icons/fa'
import { SiTailwindcss, SiReactrouter } from 'react-icons/si'
import { LuSparkles } from 'react-icons/lu'

function Home() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-slate-800">Home Page</h2>
      <p className="text-slate-600">
        Clean project ready! Start adding your components and routes here.
      </p>
    </div>
  )
}

function About() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-slate-800">About Page</h2>
      <p className="text-slate-600">
        React Router navigation is set up and working seamlessly.
      </p>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-slate-900">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg border border-slate-100 p-8 text-center space-y-6">
        <div className="flex justify-center items-center gap-4 text-3xl">
          <FaReact className="text-sky-500 animate-spin-slow" />
          <SiTailwindcss className="text-teal-500" />
          <SiReactrouter className="text-red-500" />
          <LuSparkles className="text-amber-500" />
        </div>

        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900">
            React + Router + Tailwind + Icons
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Starter template is ready for your development
          </p>
        </div>

        <nav className="flex justify-center gap-4 border-y border-slate-100 py-3">
          <Link
            to="/"
            className="px-4 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="px-4 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition"
          >
            About
          </Link>
        </nav>

        <div className="p-4 bg-slate-50 rounded-xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
