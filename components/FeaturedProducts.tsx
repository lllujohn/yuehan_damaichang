import ProductCard from './ProductCard'

const featuredProducts = [
  {
    id: 1,
    title: 'iPhone 13 Pro 256GB',
    price: 4999,
    originalPrice: 8999,
    image: '/4323002b032e4d3ad2b19a6c2d2c752.jpg',
    condition: '9成新',
    seller: '张同学',
    location: '图书馆',
    views: 234,
  },
  {
    id: 2,
    title: '四大名著',
    price: 89,
    originalPrice: 180,
    image: '/b78fd1e53131accb6563128d403119f.jpg',
    condition: '95新',
    seller: '李同学',
    location: '晖园宿舍14栋',
    views: 156,
  },
  {
    id: 3,
    title: 'MacBook Pro 笔记本',
    price: 5999,
    originalPrice: 9999,
    image: '/658e102d9bac824278e82769ee9b1b4.jpg',
    condition: '95新',
    seller: '王同学',
    location: '创业园',
    views: 567,
  },
  {
    id: 4,
    title: '电动滑板车',
    price: 899,
    originalPrice: 1999,
    image: '/9a8394fbded13c879e3069253e12dc3.jpg',
    condition: '8成新',
    seller: '赵同学',
    location: '中苑老食堂',
    views: 423,
  },
  {
    id: 5,
    title: 'yls口红',
    price: 329,
    originalPrice: 410,
    image: '/f2de0383dcd5e6515c4a5c929b6f732.jpg',
    condition: '99新',
    seller: '刘同学',
    location: '沁12栋',
    views: 289,
  },
  {
    id: 6,
    title: 'Kindle 电子书阅读器',
    price: 499,
    originalPrice: 998,
    image: '/27e46a87b09198f5b8bd95eaa7e02ff.jpg',
    condition: '95新',
    seller: '陈同学',
    location: '气象谷',
    views: 178,
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* 标题 */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="heading-md mb-2">精选好物</h2>
            <p className="text-gray-600">发现值得入手的宝贝</p>
          </div>
          <button className="btn-secondary">查看更多</button>
        </div>

        {/* 商品网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
