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
