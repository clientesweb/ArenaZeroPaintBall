/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    // Enable build cache
    incrementalCacheHandlerPath: require.resolve('./cache-handler.js'),
  },
}

module.exports = nextConfig

