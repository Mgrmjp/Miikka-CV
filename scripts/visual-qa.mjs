import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const baseUrl = process.env.QA_URL ?? "http://127.0.0.1:4321/";
const outDir = join(dirname(fileURLToPath(import.meta.url)), "..", ".qa-screenshots");

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "tablet", width: 834, height: 1194 },
  { name: "mobile", width: 390, height: 844 }
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage();

for (const vp of viewports) {
  await page.setViewportSize({ width: vp.width, height: vp.height });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.waitForTimeout(400);

  await page.screenshot({
    path: join(outDir, `${vp.name}-full.png`),
    fullPage: true
  });

  await page.screenshot({
    path: join(outDir, `${vp.name}-hero.png`),
    fullPage: false
  });
}

await browser.close();
console.log("Screenshots saved to .qa-screenshots/");
