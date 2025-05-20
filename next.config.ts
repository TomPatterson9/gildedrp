import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/gildedrp', // Replace with your repository name
  images: { unoptimized: true }, // Required for static export
};

export default nextConfig;