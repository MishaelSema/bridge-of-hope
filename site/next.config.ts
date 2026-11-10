import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

/** The repo root (this file lives in `<repo>/site`). */
const repoRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

/**
 * Vercel free-tier guard.
 *
 * `next/image` defaults to serving every photo through `/_next/image`, which
 * bills one "Image Transformation" per source image × width × deployment. That
 * quota (5,000/mo) is what has been blocking deployments on this account.
 *
 * All photography here lives in `public/images` as pre-optimised WebP (max
 * 1400–1600px, q78), so the optimiser adds nothing except cost. Turning it off
 * means zero image transformations, zero image cache writes and zero image
 * cache reads — images stream straight from the static CDN like any other asset.
 *
 * If an image ever needs resizing, do it at build time or through Cloudinary's
 * URL transforms — never through Vercel's optimiser.
 */
const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Pin tracing to the repo root so Next stops inferring the parent folder
  // (which holds a second package-lock.json) as the workspace root.
  outputFileTracingRoot: repoRoot,
  // Keep the deployment small and the build quick: no source maps shipped.
  productionBrowserSourceMaps: false,
};

export default nextConfig;
