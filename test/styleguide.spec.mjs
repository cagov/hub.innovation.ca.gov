import { test, expect } from '@playwright/test';
import { STYLEGUIDE_INTRO } from './styleguide-urls.mjs';

const testLocation = 'http://localhost:8080';

test('intro links to the five pages', async ({ page }) => {
  const res = await page.goto(testLocation + STYLEGUIDE_INTRO);
  expect(res.status()).toBe(200);
  const main = page.locator('main');
  for (const slug of ['chart-anatomy/', 'typography/', 'color/', 'spacing/', 'labels-and-callouts/']) {
    await expect(main.locator(`h3 a[href$="${slug}"]`)).toHaveCount(1);
  }
});

// ---- Color swatches and copy buttons (Task 2) ----
import fs from 'node:fs';

const COLOR_URL = testLocation + '/data/visualization-guidelines/odi-data-visualization-styleguide/color/';

test.describe('color swatches', () => {
  test.use({ permissions: ['clipboard-read', 'clipboard-write'] });

  test('Copy hex copies the hex', async ({ page }) => {
    await page.goto(COLOR_URL);
    await page.getByRole('button', { name: 'Copy hex' }).first().click();
    expect(await page.evaluate(() => navigator.clipboard.readText())).toBe('#0d4f8c');
    await expect(page.locator('.sg-copy-status')).toContainText('Copied #0d4f8c');
  });

  test('Copy RGB copies the rgb text', async ({ page }) => {
    await page.goto(COLOR_URL);
    await page.getByRole('button', { name: 'Copy RGB' }).first().click();
    expect(await page.evaluate(() => navigator.clipboard.readText())).toBe('rgb(13, 79, 140)');
  });

  test('copy works by keyboard', async ({ page }) => {
    await page.goto(COLOR_URL);
    await page.getByRole('button', { name: 'Copy hex' }).first().focus();
    await page.keyboard.press('Enter');
    expect(await page.evaluate(() => navigator.clipboard.readText())).toBe('#0d4f8c');
  });

  test('clipboard failure is reported', async ({ page }) => {
    await page.addInitScript(() => {
      navigator.clipboard.writeText = () => Promise.reject(new Error('denied'));
    });
    await page.goto(COLOR_URL);
    await page.getByRole('button', { name: 'Copy hex' }).first().click();
    await expect(page.locator('.sg-copy-status')).toContainText("Couldn't copy");
  });

  test('light swatches use dark text', async ({ page }) => {
    await page.goto(COLOR_URL);
    await expect(page.locator('.sg-swatch[data-hex="#fff4eb"]').first()).toHaveClass(/sg-swatch--dark/);
    await expect(page.locator('.sg-swatch[data-hex="#0d4f8c"]').first()).toHaveClass(/sg-swatch--light/);
  });

  test('swatch counts match Figma', async ({ page }) => {
    const data = JSON.parse(fs.readFileSync('docs/site/_data/styleguideColors.json', 'utf8'));
    const flat = Object.values(data).flat().flatMap((s) => (s.swatches ? s.swatches : [s]));
    await page.goto(COLOR_URL);
    await expect(page.getByRole('button', { name: 'Copy hex' })).toHaveCount(flat.length);
    await expect(page.getByRole('button', { name: 'Copy RGB' })).toHaveCount(flat.filter((s) => s.rgb).length);
  });
});
