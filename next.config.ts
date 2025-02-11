import type { NextConfig } from 'next';
import path from 'path'; // 1. path 선언

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  output: 'export',

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
