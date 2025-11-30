import ProductCard from './ProductCard'

const featuredProducts = [
  {
    id: 1,
    title: 'iPhone 13 Pro 256GB',
    price: 4999,
    originalPrice: 8999,
    image: 'https://images.unsplash.com/photo-1592286927505-2fd3364fb367?w=500',
    condition: '9成新',
    seller: '张同学',
    location: '图书馆',
    views: 234,
  },
  {
    id: 2,
    title: '精装书籍合集',
    price: 89,
    originalPrice: 180,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500',
    condition: '95新',
    seller: '李同学',
    location: '东区宿舍',
    views: 156,
  },
  {
    id: 3,
    title: 'MacBook Pro 笔记本',
    price: 5999,
    originalPrice: 9999,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
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
    image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=500',
    condition: '8成新',
    seller: '赵同学',
    location: '体育馆',
    views: 423,
  },
  {
    id: 5,
    title: '美妆护肤套装',
    price: 299,
    originalPrice: 899,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500',
    condition: '99新',
    seller: '刘同学',
    location: '西区宿舍',
    views: 289,
  },
  {
    id: 6,
    title: 'Kindle 电子书阅读器',
    price: 499,
    originalPrice: 998,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500',
    condition: '95新',
    seller: '陈同学',
    location: '咖啡厅',
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
