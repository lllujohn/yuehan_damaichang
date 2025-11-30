import ProductCard from './ProductCard'

const featuredProducts = [
  {
    id: 1,
    title: 'iPhone 13 Pro 256GB',
    price: 4999,
    originalPrice: 8999,
    image: 'https://placehold.co/600x600/4A90E2/white?text=iPhone+13+Pro',
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
    image: 'https://placehold.co/600x600/7B68EE/white?text=精装书籍',
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
    image: 'https://placehold.co/600x600/20B2AA/white?text=MacBook+Pro',
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
    image: 'https://placehold.co/600x600/FF6347/white?text=电动滑板车',
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
    image: 'https://placehold.co/600x600/FF69B4/white?text=美妆套装',
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
    image: 'https://placehold.co/600x600/9370DB/white?text=Kindle',
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
