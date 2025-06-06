import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

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

export default withNextIntl(nextConfig);
