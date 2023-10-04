/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";

const pathPrefix = isProduction ? "/task-prioritizer" : "";

const nextConfig = {
  output: isProduction ? "export" : undefined,
  basePath: pathPrefix,
  assetPrefix: pathPrefix,
  env: {
    pathPrefix,
  },
};

module.exports = nextConfig;
