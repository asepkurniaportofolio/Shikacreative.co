import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shiori-kagawa.vercel.app",
        pathname: "/poster.jpg",
      },
    ],
  },
};

export default nextConfig;
