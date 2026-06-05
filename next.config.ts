import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(isGithubPages
    ? {
        assetPrefix: "/portfolio/",
        basePath: "/portfolio",
      }
    : {}),
};

export default nextConfig;
