import Link from 'next/link'

const categories = [
  {
    id: 1,
    name: '电子产品',
    icon: '📱',
    count: 1234,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    name: '教材书籍',
    icon: '📚',
    count: 856,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    name: '生活用品',
    icon: '🏠',
    count: 642,
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 4,
    name: '运动器材',
    icon: '⚽',
    count: 428,
    color: 'from-green-500 to-teal-500',
  },
  {
    id: 5,
    name: '美妆服饰',
    icon: '👗',
    count: 573,
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 6,
    name: '其他',
    icon: '🎁',
    count: 391,
    color: 'from-indigo-500 to-purple-500',
  },
]

export default function Categories() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="heading-md mb-4">热门分类</h2>
          <p className="text-gray-600 text-lg">探索校园里的好物</p>
        </div>

        {/* 分类网格 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.id}`}
              className="card group cursor-pointer p-8 text-center 
                       hover:scale-105 transition-transform duration-300"
            >
              <div
                className={`w-20 h-20 mx-auto mb-4 rounded-2xl 
                          bg-gradient-to-br ${category.color} 
                          flex items-center justify-center text-4xl
                          group-hover:scale-110 transition-transform duration-300`}
              >
                {category.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
              <p className="text-gray-500 text-sm">{category.count} 件商品</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
