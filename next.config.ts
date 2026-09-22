import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the CRM as a full Next.js server app so OMNI GOD AI API routes
  // can execute on Railway instead of being exported as static HTML.
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
