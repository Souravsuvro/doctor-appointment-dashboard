/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // Ensures complete build for deployment
  images: {
    domains: ['localhost', 'doctor-appointment-dashboard.vercel.app'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false, // Stricter error checking
  },
  experimental: {
    optimizePackageImports: ['@fortawesome/react-fontawesome'],
    serverComponentsExternalPackages: ['@fortawesome/fontawesome-svg-core']
  },
  // Add headers to ensure correct MIME types
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/javascript',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
