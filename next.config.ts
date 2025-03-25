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

  env: {
    GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },
};

export default nextConfig;
