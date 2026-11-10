const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const SRC = "C:\\Users\\misha\\Desktop\\Mishael Sema\\Websites\\bridge-of-hope\\site\\content-images\\bulk-images";
const OUT = "C:\\Users\\misha\\Desktop\\Mishael Sema\\Websites\\bridge-of-hope\\site\\public\\images";

const map = {
  "IMG-20201023-WA0030.jpg.jpeg": "event-group.webp",
  "IMG-20201023-WA0037.jpg.jpeg": "applause.webp",
  "IMG-20201023-WA0036.jpg.jpeg": "crutches-man.webp",
  "IMG-20201023-WA0032.jpg.jpeg": "crutches-phone.webp",
  "IMG-20201023-WA0040.jpg.jpeg": "community-table.webp",
  "IMG-20201023-WA0024.jpg.jpeg": "event-networking.webp",
  "IMG-20201103-WA0028.jpg.jpeg": "meeting-speaking.webp",
  "IMG-20201103-WA0035.jpg.jpeg": "association-banner.webp",
  "IMG-20210808-WA0007.jpg.jpeg": "advocacy-handshake.webp",
  "IMG-20210808-WA0006.jpg.jpeg": "advocacy-handover.webp",
  "IMG_3333.JPG.jpeg": "award-certificate.webp",
  "IMG_3337.JPG.jpeg": "award-group.webp",
  "IMG_3340.JPG.jpeg": "award-smile.webp",
  "IMG_4146.JPG.jpeg": "expo-selfie.webp",
  "IMG_4165.JPG.jpeg": "expo-power-africa.webp",
  "IMG_4167.JPG.jpeg": "expo-scooter.webp",
  "20231214_195225.jpg.jpeg": "founder-cane.webp",
  "20230803_101504 - Copy.jpg.jpeg": "founder-lanyard.webp",
  "Khrys.jpg.jpeg": "founder-portrait.webp",
};

(async () => {
  for (const [name, out] of Object.entries(map)) {
    const src = path.join(SRC, name);
    if (!fs.existsSync(src)) {
      console.log("MISS  " + name);
      continue;
    }
    try {
      const meta = await sharp(src).metadata();
      await sharp(src)
        .resize({ width: 1600, withoutEnlargement: true })
        .webp({ quality: 78, effort: 6 })
        .toFile(path.join(OUT, out));
      const size = Math.round(fs.statSync(path.join(OUT, out)).size / 1024);
      console.log(
        `OK    ${name.padEnd(34)} -> ${out.padEnd(26)} ${String(size).padStart(4)}KB  (${meta.width}x${meta.height})`
      );
    } catch (e) {
      console.log("FAIL  " + name + " :: " + e.message);
    }
  }
})();
