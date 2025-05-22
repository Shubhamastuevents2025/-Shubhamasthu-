/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  // Add static export for better compatibility
  output: 'export',
  // Disable strict mode temporarily to avoid double-rendering issues
  reactStrictMode: false,
  trailingSlash: true,
}

export default nextConfig
