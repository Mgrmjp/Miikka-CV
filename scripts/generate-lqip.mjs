#!/usr/bin/env node
/**
 * Build a tiny AVIF placeholder for blur-up loading.
 * Uses sharp.
 *
 * Usage: npm run assets:lqip
 */

import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE = path.join(ROOT, "public", "profile-circle.avif");
const OUTPUT = path.join(ROOT, "public", "profile-circle-lq.avif");

await sharp(SOURCE)
  .resize(48, 48)
  .avif({ quality: 50, effort: 6 })
  .toFile(OUTPUT);

console.log(`Wrote ${OUTPUT}`);
