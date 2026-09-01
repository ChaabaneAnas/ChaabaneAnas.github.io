import type { NextConfig } from "next";

/**
 * Static export for GitHub Pages (user site → served from the domain root,
 * so no basePath/assetPrefix). `trailingSlash` makes every route emit an
 * index.html, which is what Pages' static file server expects.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  images: { unoptimized: true },
};

export default nextConfig;
