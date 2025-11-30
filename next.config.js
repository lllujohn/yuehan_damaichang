/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 's3.amazonaws.com', 'aliyuncs.com', 'images.unsplash.com'],
  },
}

module.exports = nextConfig
