interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  seller: string;
  rating: number;
  reviews: number;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
      {/* Image Container */}
      <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 h-40 sm:h-48 flex items-center justify-center text-4xl sm:text-6xl group-hover:scale-105 transition-transform duration-300">
        {product.image}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        {/* Category Badge */}
        <div className="mb-2">
          <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
            {product.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm sm:text-base leading-snug">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex text-yellow-400 text-sm">
            {"★".repeat(Math.floor(product.rating))}
            {product.rating % 1 !== 0 && "✦"}
          </div>
          <span className="text-xs sm:text-sm text-gray-600">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Seller Info */}
        <p className="text-xs sm:text-sm text-gray-600 mb-3">
          Seller: <span className="font-medium text-gray-800">{product.seller}</span>
        </p>

        {/* Price and Button */}
        <div className="flex items-center justify-between gap-2">
          <div>
            <span className="text-xl sm:text-2xl font-bold text-gray-900">
              ₹{product.price.toLocaleString()}
            </span>
          </div>
          <button className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition text-xs sm:text-sm whitespace-nowrap">
            View
          </button>
        </div>

        {/* Wishlist Button */}
        <button className="w-full mt-2 px-3 py-2 border border-gray-300 text-gray-700 font-medium rounded hover:bg-gray-50 transition text-xs sm:text-sm">
          ♡ Save
        </button>
      </div>
    </div>
  );
}
