/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'doctor-appointment-dashboard.vercel.app'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true, // This will allow build to continue with warnings
  },
  experimental: {
    optimizePackageImports: ['@fortawesome/react-fontawesome']
  }
};

module.exports = nextConfig;
