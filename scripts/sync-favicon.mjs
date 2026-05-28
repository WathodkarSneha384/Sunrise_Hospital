/**
 * Regenerates favicon.ico / favicon.png from public/images/logo.png
 * Run after replacing the logo: npm run sync-favicon
 */
import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";
import toIco from "to-ico";

const src = "public/images/logo.png";
const input = await readFile(src);

const png32 = await sharp(input)
  .resize(32, 32, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .png()
  .toBuffer();

const png180 = await sharp(input)
  .resize(180, 180, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .png()
  .toBuffer();

const ico = await toIco([png32], { resize: true });

const targets = [
  ["public/favicon.png", png32],
  ["public/apple-touch-icon.png", png180],
  ["public/favicon.ico", ico],
  ["src/app/favicon.ico", ico],
  ["src/app/icon.png", png32],
  ["src/app/apple-icon.png", png180],
];

for (const [path, data] of targets) {
  await writeFile(path, data);
}

console.log("Favicons synced from", src);
