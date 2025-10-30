import { NextConfig } from 'next';
import nextAuth from 'next-auth';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: []
  }
};

export default nextConfig;
