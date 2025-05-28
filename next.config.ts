import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'statics.avenida.com'
      }
    ]
  }
};

export default nextConfig

