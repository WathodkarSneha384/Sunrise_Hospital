import { readFile } from "node:fs/promises";
import path from "node:path";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const buffer = await readFile(
    path.join(process.cwd(), "public/images/logo.png")
  );
  return new Response(buffer, {
    headers: { "Content-Type": "image/png" },
  });
}
