#!/usr/bin/env node
/**
 * Build a tiny JPEG placeholder for blur-up loading.
 * Requires ImageMagick (`convert` on PATH).
 *
 * Usage: npm run assets:lqip
 */

import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE = path.join(ROOT, "public", "profile-circle.png");
const OUTPUT = path.join(ROOT, "public", "profile-circle-lq.jpg");

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: "inherit" });
    child.on("error", reject);
    child.on("exit", (code) =>
      code === 0 ? resolve() : reject(new Error(`${command} exited ${code}`))
    );
  });
}

await run("convert", [
  SOURCE,
  "-resize",
  "48x48",
  "-strip",
  "-quality",
  "50",
  OUTPUT
]);

console.log(`Wrote ${OUTPUT}`);
