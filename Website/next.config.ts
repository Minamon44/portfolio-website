import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Optional: if deploying to username.github.io/repo-name
  // basePath: "/portfolio",
  // assetPrefix: "/portfolio/",
};

export default nextConfig;
