import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    qualities: [100, 75],
    remotePatterns: [
      new URL('https://sridhar-nallasamy.github.io/**'),
      new URL('https://storage.googleapis.com/multimedia.printinkz.com/**'),
    ],
  },
  allowedDevOrigins: ['192.168.0.3', '192.168.0.215', '192.168.29.33'],
};

export default nextConfig;
