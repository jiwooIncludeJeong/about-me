/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  extends: [
    'plugin:@next/next/recommended',
  ],
  eslint: {
    ignoreDuringBuilds: true
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.(js|ts)x?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  async headers() {
    return [{
      source: '/(.*)',
      headers: [{
        key: 'X-Frame-Options',
        value: 'DENY'
      }]
    }]
  }
}

module.exports = nextConfig
