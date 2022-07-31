/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains:["images.tmdb.org"]
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
