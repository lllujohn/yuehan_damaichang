const features = [
  {
    id: 1,
    icon: '🔒',
    title: '安全可靠',
    description: '学生认证体系，实名交易，区块链存证保障',
  },
  {
    id: 2,
    icon: '🎯',
    title: '智能推荐',
    description: 'AI 算法精准匹配，发现你真正需要的好物',
  },
  {
    id: 3,
    icon: '🚀',
    title: '便捷交易',
    description: '即时沟通，线上支付，校园自提一站式服务',
  },
  {
    id: 4,
    icon: '💎',
    title: '品质保证',
    description: '专业鉴定服务，让每一件二手都值得信赖',
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="heading-md mb-4">为什么选择我们</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            致力于打造最安全、便捷、值得信赖的校园二手交易平台
          </p>
        </div>

        {/* 特性网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="text-center p-8 rounded-2xl hover:bg-gray-50 
                       transition-all duration-300 group"
            >
              <div
                className="w-16 h-16 mx-auto mb-6 text-5xl 
                          group-hover:scale-110 transition-transform duration-300"
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA 部分 */}
        <div className="mt-20 text-center">
          <div className="inline-block p-12 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600">
            <h3 className="text-3xl font-bold text-white mb-4">
              准备好开始交易了吗？
            </h3>
            <p className="text-blue-100 text-lg mb-8">
              加入我们，让闲置物品焕发新生命
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-xl transition-all duration-300">
                立即注册
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                了解更多
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
