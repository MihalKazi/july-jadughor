import { chromium } from "playwright";
import fs from "node:fs";

const outDir = process.argv[2];
const baseUrl = process.argv[3] || "http://localhost:3000";
const pages = ["/", "/history", "/controversies", "/verification", "/interviews", "/culture"];

fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();

for (const viewport of [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
]) {
  const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } });
  const page = await context.newPage();
  for (const path of pages) {
    const slug = path === "/" ? "home" : path.slice(1);
    await page.goto(`${baseUrl}${path}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(400);
    const file = `${outDir}/${slug}-${viewport.name}.png`;
    await page.screenshot({ path: file, fullPage: true });
    console.log(file);
  }
  await context.close();
}

await browser.close();
