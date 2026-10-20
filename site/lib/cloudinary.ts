/**
 * Cloudinary helpers for image storage.
 *
 * Configure with a single CLOUDINARY_URL (cloudinary://api_key:api_secret@cloud_name)
 * — the form Cloudinary itself hands out — or the three separate
 * CLOUDINARY_* values. Until one of those is set this module no-ops, so the
 * site builds and runs without images.
 */

function parseCloudinaryUrl(): { cloud?: string; key?: string; secret?: string } {
  const url = process.env.CLOUDINARY_URL;
  if (!url) return {};
  const match = /^cloudinary:\/\/([^:]+):([^@]+)@(.+)$/.exec(url.trim());
  if (!match) return {};
  return { key: match[1], secret: match[2], cloud: match[3] };
}

const fromUrl = parseCloudinaryUrl();

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME ?? fromUrl.cloud;
const API_KEY = process.env.CLOUDINARY_API_KEY ?? fromUrl.key;
const API_SECRET = process.env.CLOUDINARY_API_SECRET ?? fromUrl.secret;

export const cloudinaryEnabled = Boolean(CLOUD_NAME && API_KEY && API_SECRET);

export function cloudinaryFolder(): string {
  return process.env.CLOUDINARY_FOLDER ?? "bridge-of-hope";
}

/** Public URL for a stored asset. */
export function cloudinaryUrl(publicId: string, options?: { width?: number; height?: number }): string {
  if (!CLOUD_NAME) return "";
  const transforms = [
    options?.width ? `w_${options.width}` : "",
    options?.height ? `h_${options.height}` : "",
    "c_fill",
    "f_auto",
    "q_auto",
  ]
    .filter(Boolean)
    .join(",");
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transforms}/${publicId}`;
}

/** Minimal signature for direct uploads (SHA-1 of sorted params + secret). */
export async function cloudinarySignature(folder: string): Promise<Record<string, string> | null> {
  if (!cloudinaryEnabled) return null;
  const { createHash } = await import("crypto");
  const timestamp = Math.round(Date.now() / 1000);
  const toSign = `folder=${folder}&timestamp=${timestamp}${API_SECRET}`;
  const signature = createHash("sha1").update(toSign).digest("hex");
  return {
    api_key: API_KEY!,
    folder,
    timestamp: String(timestamp),
    signature,
    cloud_name: CLOUD_NAME!,
  };
}
