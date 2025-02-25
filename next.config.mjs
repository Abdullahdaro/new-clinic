/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'fr', 'tr'],
    defaultLocale: 'en',
    localeDetection: true
  },
};

export default nextConfig;
