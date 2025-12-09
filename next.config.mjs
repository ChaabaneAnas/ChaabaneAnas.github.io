/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/My_Portfolio',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
