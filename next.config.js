/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["preview.bit68.com"],
  },
}

module.exports = nextConfig
