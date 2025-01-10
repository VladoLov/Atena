/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["images.unsplash.com"], // Allow Unsplash images
  },
};

export default nextConfig;
