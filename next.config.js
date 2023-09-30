/** @type {import('next').NextConfig} */

const pathPrefix =
  process.env.NODE_ENV === "production" ? "/task-prioritizer" : "";

const nextConfig = {
  output: process.env.NODE_ENV !== "production" ? undefined : "export",
  assetPrefix: pathPrefix,
  env: {
    pathPrefix,
  },
};

module.exports = nextConfig;
