import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",   // Generates static files in the `out/` folder for S3
  images: {
    unoptimized: true, // Required for static export (no server-side image optimization)
  },
};

export default nextConfig;
