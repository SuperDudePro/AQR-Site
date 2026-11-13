import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { chromium } from "playwright-core";

const origin = "http://127.0.0.1:4174";
const server = spawn("npm", ["run", "preview", "--", "--host", "127.0.0.1", "--port", "4174", "--strictPort"], {
  stdio: "pipe",
  detached: true,
});
let serverError = "";
server.stderr.on("data", (data) => { serverError += data; });

function matchesTotal(status, n) {
  assert.match(status, new RegExp(`Session total: ${n} attempts?`));
}
async function statusText(page) {
  return page.locator(".va-status").first().innerText();
}
async function checkLayout(page, label) {
  const overflow = await page.evaluate(() => Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth));
  assert.ok(overflow <= 4, `${label}: horizontal overflow of ${overflow}px`);
}

try {
  let ready = false;
  for (let i = 0; i < 50; i++) {
    if (server.exitCode !== null) throw new Error(`Preview server exited: ${serverError}`);
    try { if ((await fetch(origin)).ok) { ready = true; break; } } catch { /* starting */ }
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  assert.ok(ready, `Preview never became ready: ${serverError}`);

  const browser = await chromium.launch({
    ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : { channel: "chrome" }),
    headless: true,
    args: ["--no-sandbox"],
  });
  try {
    for (const viewport of [{ name: "Chromebook", width: 1366, height: 768 }, { name: "mobile", width: 390, height: 844 }]) {
      const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } });
      try {
        const response = await page.goto(origin, { waitUntil: "networkidle" });
        assert.equal(response?.status(), 200);
        assert.equal(await page.locator("a[href='/vocabulary']").count() > 0, true, "Homepage must link to public vocabulary");
        const cta = page.getByRole("link", { name: "Play Vocabulary Arcade" });
        assert.ok(await cta.isVisible(), "Vocabulary Arcade needs a prominent public homepage entry point");
        await cta.click();
        assert.match(page.url(), /\/vocabulary\/arcade/);

        matchesTotal(await statusText(page), 0);
        await page.getByRole("button", { name: /^Quick Quiz/ }).click();
        await page.getByRole("button", { name: "Q2" }).click();
        await page.locator(".va-option").first().click();
        await page.getByRole("button", { name: "Check answer" }).click();
        matchesTotal(await statusText(page), 1);

        await page.getByRole("button", { name: /Choose another game \(keep session total\)/ }).click();
        matchesTotal(await statusText(page), 1);
        await page.getByRole("button", { name: /^Match Pairs/ }).click();
        await page.getByRole("button", { name: "Q2" }).click();
        matchesTotal(await statusText(page), 1);
        await page.locator(".va-pair-column").first().locator("button").first().click();
        await page.locator(".va-pair-column").nth(1).locator("button").first().click();
        matchesTotal(await statusText(page), 2);

        await page.getByRole("button", { name: /Choose another game \(keep session total\)/ }).click();
        await page.getByRole("button", { name: /^Mystery Word/ }).click();
        await page.getByRole("button", { name: "Q2" }).click();
        matchesTotal(await statusText(page), 2);
        await page.getByLabel("Your word or phrase").fill("a-nonexistent-answer-98765");
        await page.getByRole("button", { name: "Check guess" }).click();
        matchesTotal(await statusText(page), 3);

        await page.getByRole("button", { name: "Finish & show proof" }).click();
        const receipt = await page.locator(".va-proof").innerText();
        assert.match(receipt, /Session attempts:\s*3/);
        assert.match(receipt, /Quick Quiz 1/);
        assert.match(receipt, /Match Pairs 1/);
        assert.match(receipt, /Mystery Word 1/);
        await checkLayout(page, viewport.name + " receipt");

        await page.getByRole("button", { name: /Choose another game \(keep session total\)/ }).click();
        matchesTotal(await statusText(page), 3);
        await page.getByRole("button", { name: /^Quick Quiz/ }).click();
        await page.getByRole("button", { name: "Q2" }).click();
        matchesTotal(await statusText(page), 3);
        await page.getByRole("button", { name: "Start a new session" }).click();
        matchesTotal(await statusText(page), 0);
        await checkLayout(page, viewport.name + " new session");
        console.log(`${viewport.name}: homepage link, three-game cumulative count, combined receipt, reset and overflow passed`);
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
  }
} finally {
  try { process.kill(-server.pid); } catch { /* preview exited */ }
}
