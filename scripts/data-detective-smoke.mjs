import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { chromium } from "playwright-core";

const origin = "http://127.0.0.1:4175";
const server = spawn("npm", ["run", "preview", "--", "--host", "127.0.0.1", "--port", "4175", "--strictPort"], { stdio: "pipe", detached: true });
let errors = "";
server.stderr.on("data", (part) => { errors += part; });
const solutions = [0, 1, 2, 1];

try {
  let ready = false;
  for (let attempt = 0; attempt < 50; attempt++) {
    if (server.exitCode !== null) throw Error(`Server exited: ${errors}`);
    try { if ((await fetch(origin)).ok) { ready = true; break; } } catch { /* starting */ }
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  assert.ok(ready, "Preview never started");
  const browser = await chromium.launch({ ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : { channel: "chrome" }), headless: true, args: ["--no-sandbox"] });
  try {
    for (const viewport of [{ name: "Chromebook", width: 1366, height: 768 }, { name: "mobile", width: 390, height: 844 }]) {
      const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } });
      try {
        await page.addInitScript(() => {
          Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText: async (text) => { window.__dataDetectiveCopied = text; } } });
        });
        const resource = await page.goto(`${origin}/resources`, { waitUntil: "networkidle" });
        assert.equal(resource?.status(), 200);
        await page.getByRole("link", { name: /Data Detective Lab/ }).click();
        assert.equal(new URL(page.url()).pathname, "/data-detective", "Resource Finder must open the new lab");
        await page.getByRole("heading", { name: "Data Detective Lab" }).waitFor();
        for (let i = 0; i < solutions.length; i++) {
          const heading = page.locator("#dd-case-title");
          assert.ok(await heading.isVisible(), `${viewport.name} case ${i + 1} heading`);
          assert.equal(await page.getByRole("radio").count(), 3);
          if (i === 0) {
            await page.getByRole("radio").nth(1).check();
            await page.getByRole("button", { name: "Check my reasoning" }).click();
            assert.ok(await page.getByRole("heading", { name: "Check the evidence again" }).isVisible());
            await page.getByRole("button", { name: "Try again" }).click();
          }
          await page.getByRole("radio").nth(solutions[i]).check();
          await page.getByRole("button", { name: "Check my reasoning" }).click();
          assert.ok(await page.getByRole("heading", { name: "Evidence supported" }).isVisible());
          await page.getByRole("button", { name: i === 3 ? "Finish the case file" : "Next investigation" }).click();
          const overflow = await page.evaluate(() => Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth));
          assert.ok(overflow <= 4, `${viewport.name} case ${i}: horizontal overflow ${overflow}px`);
        }
        assert.ok(await page.getByRole("heading", { name: "Your detective report" }).isVisible());
        await page.getByLabel("Write one rule you will use before believing a data claim.").fill("Check denominators and missing data.");
        await page.getByRole("button", { name: "Copy evidence summary" }).click();
        assert.match(await page.getByRole("status").last().innerText(), /Copied your evidence summary/);
        const copied = await page.evaluate(() => window.__dataDetectiveCopied);
        assert.match(copied, /Group A: 18\/20 = 90%/);
        assert.match(copied, /Check denominators and missing data/);
        await page.getByRole("button", { name: "Restart lab" }).click();
        assert.ok(await page.getByRole("heading", { name: "The incomplete tracking log" }).isVisible());
        console.log(`${viewport.name}: 4 cases, error recovery, receipt, restart and layout PASS`);
      } finally { await page.close(); }
    }
  } finally { await browser.close(); }
} finally {
  if (server.pid) {
    try { process.kill(-server.pid, "SIGTERM"); } catch { server.kill("SIGTERM"); }
  }
}
