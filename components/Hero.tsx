'use client'

import { useState } from 'react'

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // 搜索逻辑
    console.log('搜索:', searchQuery)
  }

  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* 主标题 */}
          <h1 className="heading-xl mb-6">
            让闲置
            <span className="text-gradient"> 焕发新生</span>
          </h1>

          {/* 副标题 */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            专为大学生打造的二手交易平台
            <br />
            安全、便捷、值得信赖
          </p>

          {/* 搜索框 */}
          <form
            onSubmit={handleSearch}
            className="max-w-2xl mx-auto mb-8 animate-slide-up"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="搜索你感兴趣的商品..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-custom pl-12 pr-4 py-4 text-lg shadow-lg"
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </form>

          {/* 快捷标签 */}
          <div className="flex flex-wrap justify-center gap-3">
            {['电子产品', '教材书籍', '生活用品', '运动器材', '美妆服饰'].map(
              (tag) => (
                <button
                  key={tag}
                  className="px-5 py-2 bg-white rounded-full text-gray-700 
                           hover:bg-blue-50 hover:text-blue-600 
                           transition-all duration-300 shadow-sm"
                >
                  {tag}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
