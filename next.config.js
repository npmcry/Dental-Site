/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // For static site generation
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Handle trailing slashes consistently
  trailingSlash: true,
}

module.exports = nextConfig