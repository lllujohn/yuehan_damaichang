'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-md py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gradient">
            信大大卖场
          </Link>

          {/* 导航链接 */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/products"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              浏览商品
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              服务站
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              关于我们
            </Link>
          </div>

          {/* 右侧按钮 */}
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              登录
            </Link>
            <Link href="/publish" className="btn-primary">
              发布闲置
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
