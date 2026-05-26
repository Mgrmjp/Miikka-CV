#!/usr/bin/env node
/**
 * Render /cv-print with Chromium and write public/miikka-makela-cv.pdf.
 *
 * Usage:
 *   npm run cv:pdf
 *   CV_PDF_URL=http://127.0.0.1:4321/cv-print npm run cv:pdf   # dev server already up
 *   CV_PDF_SKIP_BUILD=1 npm run cv:pdf                         # use existing dist/
 */

import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUTPUT = path.join(ROOT, "public", "miikka-makela-cv.pdf");
const PORT = Number(process.env.CV_PDF_PORT ?? 4173);
const BASE_URL = process.env.CV_PDF_URL ?? `http://127.0.0.1:${PORT}/cv-print`;

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { cwd: ROOT, stdio: "inherit", shell: false });
    child.on("error", reject);
    child.on("exit", (code) => (code === 0 ? resolve() : reject(new Error(`${command} exited ${code}`))));
  });
}

async function waitForServer(url, timeoutMs = 90_000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetch(url, { redirect: "follow" });
      if (response.ok) return;
    } catch {
      // preview still starting
    }
    await new Promise((resolve) => setTimeout(resolve, 400));
  }
  throw new Error(`Timed out waiting for ${url}`);
}

function startPreview() {
  return spawn(
    "npm",
    ["run", "preview", "--", "--host", "127.0.0.1", "--port", String(PORT)],
    { cwd: ROOT, stdio: "pipe", shell: false }
  );
}

async function main() {
  let preview;
  const useExternalUrl = Boolean(process.env.CV_PDF_URL);

  if (!useExternalUrl) {
    if (process.env.CV_PDF_SKIP_BUILD !== "1") {
      await run("npm", ["run", "build"]);
    }
    preview = startPreview();
    await waitForServer(BASE_URL);
  }

  await mkdir(path.dirname(OUTPUT), { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(BASE_URL, { waitUntil: "networkidle" });
  await page.waitForTimeout(300);
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: OUTPUT,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" }
  });
  await browser.close();

  if (preview) {
    preview.kill("SIGTERM");
  }

  console.log(`Wrote ${OUTPUT}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
