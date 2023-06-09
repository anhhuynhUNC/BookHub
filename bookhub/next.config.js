/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'books.google.com',
        port: '',
        pathname: '/books/**',
      },
    ],
  },
}

module.exports = nextConfig
