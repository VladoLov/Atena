/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  i18n: {
    locales: ["en", "hr"],
    defaultLocale: "en",
    localeDetection: false, // Disable automatic detection during SSR
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "your-domain.com",
      },
      {
        protocol: "http",
        hostname: "your-domain.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
  eslint: { ignoreDuringBuilds: true }, // Disable ESLint during builds
};

export default nextConfig;
