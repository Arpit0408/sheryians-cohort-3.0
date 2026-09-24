import React from 'react'

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 py-12">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-white tracking-tight">About ECOM</h1>
        <p className="mt-3 text-zinc-400 text-lg">
          A frontend practice project for mastering Dynamic Routing in React.
        </p>
      </div>

      {/* Project Overview */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-8 space-y-4">
        <h2 className="text-2xl font-bold text-emerald-400">Project Overview</h2>
        <p className="text-zinc-300 leading-relaxed text-base">
          This project is built for practicing <span className="text-emerald-400 font-semibold">Dynamic Routing</span> with React Router DOM, state management with React Context API, and integration with the <span className="text-emerald-400 font-semibold">FakeStore API</span>.
        </p>
        <p className="text-zinc-400 leading-relaxed">
          It showcases dynamic product listing, product detail views based on route parameters (such as <code className="text-emerald-300 bg-zinc-800 px-2 py-0.5 rounded text-sm">/products/:id</code>), and clean component architecture styled with Tailwind CSS.
        </p>
      </div>

      {/* Highlights / Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold text-white">Dynamic Routing</h3>
          <p className="text-sm text-zinc-400 mt-2">
            Dynamic URL params handling with React Router
          </p>
        </div>
        <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold text-emerald-400">FakeStore API</h3>
          <p className="text-sm text-zinc-400 mt-2">
            Real-world async data fetching with Axios
          </p>
        </div>
        <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold text-white">Context API</h3>
          <p className="text-sm text-zinc-400 mt-2">
            Global state management for e-commerce products
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
