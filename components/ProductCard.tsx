import Link from 'next/link'
import Image from 'next/image'

interface Product {
  id: number
  title: string
  price: number
  originalPrice: number
  image: string
  condition: string
  seller: string
  location: string
  views: number
}

export default function ProductCard({ product }: { product: Product }) {
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  )

  return (
    <Link href={`/products/${product.id}`} className="card group">
      {/* 商品图片 */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* 折扣标签 */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-red-500 text-white rounded-full text-sm font-semibold">
          {discount}% OFF
        </div>
        {/* 成色标签 */}
        <div className="absolute top-4 left-4 px-3 py-1 glass-effect rounded-full text-sm font-medium">
          {product.condition}
        </div>
      </div>

      {/* 商品信息 */}
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {product.title}
        </h3>

        {/* 价格 */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-bold text-blue-600">
            ¥{product.price}
          </span>
          <span className="text-gray-400 line-through text-sm">
            ¥{product.originalPrice}
          </span>
        </div>

        {/* 卖家和位置 */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>{product.seller}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>{product.location}</span>
          </div>
        </div>

        {/* 浏览量 */}
        <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-1 text-sm text-gray-500">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          <span>{product.views} 次浏览</span>
        </div>
      </div>
    </Link>
  )
}
