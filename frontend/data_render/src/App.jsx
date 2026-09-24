import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching:', err)
        setLoading(false)
      })
  }, [])

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Shop<span className="text-blue-600">Hub</span>
            </span>
          </div>

          <div className="text-xs text-gray-500 font-medium bg-gray-100 px-3 py-1.5 rounded-full">
            {products.length} Products Available
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Latest Products</h1>
          <p className="text-sm text-gray-500 mt-1">
            Browse our fresh collection fetched from FakeStore API
          </p>
        </div>

        {/* Loading / Grid */}
        {loading ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-sm animate-pulse">Loading products...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.map((item) => (
              <ProductCard key={item.id} products={item} deleteProduct={deleteProduct}/>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default App
