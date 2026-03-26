import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pizzahut-images.futureordering.com",
      },
    ],
  },
};

export default nextConfig;
