import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        "@aws-sdk/client-s3": false,
      },
    },
  }),
};

export default nextConfig;
