/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require('next-intl/plugin')
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === 'development',
  workboxOptions: {
    disableDevLogs: true,
  },
})

const withNextIntl = createNextIntlPlugin()

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'idewifzqqzqzybondupj.supabase.co',
      },
      {
        hostname: '*',
      },
    ],
  },
  webpack(config) {
    config.plugins.push(
      require('unplugin-icons/webpack').default({
        compiler: 'jsx',
        jsx: 'react',
      })
    )

    return config
  },
}

module.exports = withPWA(withNextIntl(nextConfig))
