/**
 * Rotate the archive photographs that were stored sideways.
 *
 * These frames come from phones that saved the orientation in metadata rather
 * than in the pixels, so the files themselves need turning. Rotations are
 * applied to the original source, never to an already-processed file, so this
 * script can be re-run at any time.
 *
 *   node scripts/rotate-archive-images.cjs
 *
 * Positive degrees turn clockwise.
 */
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const SRC =
  "C:\\Users\\misha\\Desktop\\Mishael Sema\\Websites\\bridge-of-hope\\site\\content-images\\bulk-images";
const OUT =
  "C:\\Users\\misha\\Desktop\\Mishael Sema\\Websites\\bridge-of-hope\\site\\public\\images";

const jobs = [
  { source: "IMG_3333.JPG.jpeg", out: "award-certificate.webp", rotate: 90 },
  { source: "IMG_3337.JPG.jpeg", out: "award-group.webp", rotate: 90 },
  { source: "IMG_3340.JPG.jpeg", out: "award-smile.webp", rotate: 90 },
  { source: "IMG_4167.JPG.jpeg", out: "expo-scooter.webp", rotate: 90 },
  { source: "20231214_195225.jpg.jpeg", out: "founder-cane.webp", rotate: 90 },
  { source: "IMG_4146.JPG.jpeg", out: "expo-selfie.webp", rotate: 180 },
  { source: "20230803_101504 - Copy.jpg.jpeg", out: "founder-lanyard.webp", rotate: -90 },
];

(async () => {
  for (const job of jobs) {
    const src = path.join(SRC, job.source);
    if (!fs.existsSync(src)) {
      console.log("MISS  " + job.source);
      continue;
    }
    try {
      await sharp(src)
        .rotate(job.rotate)
        .resize({ width: 1600, withoutEnlargement: true })
        .webp({ quality: 78, effort: 6 })
        .toFile(path.join(OUT, job.out));
      const meta = await sharp(path.join(OUT, job.out)).metadata();
      console.log(
        `OK    ${job.out.padEnd(26)} ${String(job.rotate).padStart(4)}deg -> ${meta.width}x${meta.height}  ${Math.round(
          fs.statSync(path.join(OUT, job.out)).size / 1024
        )}KB`
      );
    } catch (e) {
      console.log("FAIL  " + job.source + " :: " + e.message);
    }
  }
})();
