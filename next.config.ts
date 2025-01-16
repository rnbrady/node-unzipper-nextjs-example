import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // For unzipper (https://github.com/ZJONSSON/node-unzipper/issues/330)
    config.resolve.alias = {
      ...config.resolve.alias,
      "@aws-sdk/client-s3": false,
    };

    return config;
  },
};

export default nextConfig;
