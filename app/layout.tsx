import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '信大大卖场 - 简约可信的校园交易平台',
  description: '专为大学生打造的二手交易平台，智能推荐，安全可靠',
  keywords: '校园二手,二手交易,学生市场,闲置物品',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
