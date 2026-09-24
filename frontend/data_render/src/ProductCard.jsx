import React from 'react'

const ProductCard = ({ products , deleteProduct  }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between">
      {/* Product Image */}
      <div className="h-56 p-6 flex items-center justify-center bg-gray-50 border-b border-gray-100">
        <img
          src={products.image}
          alt={products.title}
          className="max-h-full max-w-full object-contain mix-blend-multiply hover:scale-105 transition-transform duration-200"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5">
            <span className="capitalize font-medium text-gray-400">
              {products.category}
            </span>
            {products.rating && (
              <span className="flex items-center gap-1 font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                ★ {products.rating.rate}
              </span>
            )}
          </div>

          {/* Product Title */}
          <h2
            className="font-semibold text-gray-800 text-sm line-clamp-1 mb-1"
            title={products.title}
          >
            {products.title}
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-xs line-clamp-2 mb-4 leading-relaxed">
            {products.description}
          </p>
        </div>

        {/* Price & Action Button */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-[11px] text-gray-400">Price</p>
            <p className="text-lg font-bold text-gray-900">
              ${products.price}
            </p>
          </div>

          <button className="bg-gray-900 hover:bg-black text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer active:scale-95">
            Add to Cart
          </button>
          <button 
  onClick={() => deleteProduct(products.id)} 
  className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-2 rounded-lg cursor-pointer"
>
  Delete
</button>

        </div>
      </div>
    </div>
  )
}

export default ProductCard