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

// ---- Shared page checks (Tasks 3–6) ----
async function headingTexts(page) {
  return page.locator('main .styleguide').locator('h2, h3').allInnerTexts();
}

async function expectImagesHaveAlt(page) {
  const imgs = page.locator('main .styleguide img');
  const n = await imgs.count();
  for (let i = 0; i < n; i++) {
    expect((await imgs.nth(i).getAttribute('alt')) || '').not.toBe('');
  }
  return n;
}

async function expectLinksResolve(page) {
  const hrefs = await page.locator('main .styleguide a[href]').evaluateAll((as) => as.map((a) => a.href));
  for (const href of hrefs) {
    if (!href.startsWith(testLocation)) continue;
    const res = await page.request.get(href);
    expect(res.status(), href).toBeLessThan(400);
  }
  return hrefs.length;
}

test('color page sections in Figma order', async ({ page }) => {
  await page.goto(COLOR_URL);
  expect((await headingTexts(page)).map((t) => t.trim())).toEqual([
    'Categorical colors',
    'Four versions of each color',
    'Label lighter colors',
    'Sequential colors',
    'Diverging colors',
    'Neutrals and text',
    'Show increase and decrease',
    'Show status',
    'Choosing colors for groups of people',
  ]);
  const code = page.locator('main pre code');
  await expect(code.filter({ hasText: 'odi_default' })).toHaveCount(1);
  await expect(code.filter({ hasText: 'odi_main' })).toHaveCount(1);
  await expect(code.filter({ hasText: 'seq_blue_5' })).toHaveCount(1);
  expect(await expectImagesHaveAlt(page)).toBeGreaterThanOrEqual(1);
  expect(await expectLinksResolve(page)).toBeGreaterThanOrEqual(1);
});

// ---- Typography (Task 4) ----
const TYPE_URL = testLocation + '/data/visualization-guidelines/odi-data-visualization-styleguide/typography/';

test('type table has 9 rows from Figma', async ({ page }) => {
  await page.goto(TYPE_URL);
  const rows = page.locator('.sg-type-table tbody tr');
  await expect(rows).toHaveCount(9);
  const cells = (await rows.first().locator('td').allInnerTexts()).map((t) => t.replace(/\s+/g, ' ').trim());
  expect(cells.slice(1)).toEqual(['Noto Serif or Merriweather', 'Bold', '24px', '20px', '#0d4f8c']);
});

test('title sample renders in Noto Serif', async ({ page }) => {
  await page.goto(TYPE_URL);
  const family = await page.locator('.sg-type-table .sg-type-sample').first().evaluate((el) => getComputedStyle(el).fontFamily);
  expect(family.startsWith('"Noto Serif"')).toBe(true);
});

for (const url of [TYPE_URL, COLOR_URL]) {
  test(`no horizontal page scroll at 320px ${url}`, async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 800 });
    await page.goto(url);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(320);
  });
}

// ---- Chart anatomy and Spacing (Task 5) ----
const ANATOMY_URL = testLocation + '/data/visualization-guidelines/odi-data-visualization-styleguide/chart-anatomy/';
const SPACING_URL = testLocation + '/data/visualization-guidelines/odi-data-visualization-styleguide/spacing/';

test('chart anatomy has two diagrams and their parts lists', async ({ page }) => {
  await page.goto(ANATOMY_URL);
  expect(await expectImagesHaveAlt(page)).toBe(2);
  const lists = page.locator('main .styleguide ol');
  await expect(lists).toHaveCount(2);
  await expect(lists.nth(0).locator(':scope > li')).toHaveCount(10);
  await expect(lists.nth(1).locator(':scope > li')).toHaveCount(9);
  expect((await lists.nth(0).locator('li').first().innerText()).startsWith('Title.')).toBe(true);
  expect((await lists.nth(1).locator('li').first().innerText()).startsWith('Legend.')).toBe(true);
  await expectLinksResolve(page);
});

test('spacing has both redlines and the values list', async ({ page }) => {
  await page.goto(SPACING_URL);
  expect(await expectImagesHaveAlt(page)).toBe(2);
  await expect(page.locator('main .styleguide')).toContainText('Legend to chart: 16px');
  await expectLinksResolve(page);
});

// ---- Labels and callouts (Task 6) ----
const LABELS_URL = testLocation + '/data/visualization-guidelines/odi-data-visualization-styleguide/labels-and-callouts/';

test('labels and callouts sections and current rules', async ({ page }) => {
  await page.goto(LABELS_URL);
  expect((await page.locator('main .styleguide h2').allInnerTexts()).map((t) => t.trim())).toEqual([
    'Data labels',
    'Direct labels and legends',
    'Annotations',
    'Tooltips',
    'Labels on small charts',
  ]);
  expect(await expectImagesHaveAlt(page)).toBe(3);
  const body = page.locator('main .styleguide');
  await expect(body).toContainText('In stacked bars, center each value in its part');
  await expect(body).not.toContainText('Exception:');
  await expectLinksResolve(page);
});

// ---- Links in (Task 7) ----
test('best practices landing links to the styleguide', async ({ page }) => {
  await page.goto(testLocation + '/data/visualization-guidelines/follow-data-visualization-best-practices/');
  await expect(page.locator('main article p a[href="/data/visualization-guidelines/odi-data-visualization-styleguide/"]')).toHaveCount(1);
});

// ---- Final review fixes ----
test('copy buttons name their color', async ({ page }) => {
  await page.goto(COLOR_URL);
  await expect(page.getByRole('button', { name: 'Copy hex #0d4f8c', exact: true })).toHaveCount(4);
  await expect(page.getByRole('button', { name: 'Copy RGB rgb(13, 79, 140)', exact: true })).toHaveCount(4);
});

test('copy hex focus ring is a dark ring with a white halo', async ({ page }) => {
  await page.goto(COLOR_URL);
  await page.getByRole('button', { name: 'Copy hex' }).first().focus();
  const s = await page.getByRole('button', { name: 'Copy hex' }).first().evaluate((el) => {
    const cs = getComputedStyle(el);
    return { outline: cs.outlineColor, style: cs.outlineStyle, shadow: cs.boxShadow };
  });
  expect(s.style).toBe('solid');
  expect(s.outline).toBe('rgb(30, 30, 30)');
  expect(s.shadow).toContain('rgb(255, 255, 255)');
});

test('every swatch label meets 4.5:1', async ({ page }) => {
  await page.goto(COLOR_URL);
  const worst = await page.locator('.sg-swatch__color, .sg-ramp-row__color, .sg-version-cell__color').evaluateAll((els) => {
    const parse = (c) => c.match(/\d+(\.\d+)?/g).slice(0, 3).map(Number);
    const lum = ([r, g, b]) => {
      const f = (v) => { v /= 255; return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
      return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
    };
    return Math.min(...els.map((el) => {
      const cs = getComputedStyle(el);
      const a = lum(parse(cs.color)), b = lum(parse(cs.backgroundColor));
      return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
    }));
  });
  expect(worst).toBeGreaterThanOrEqual(4.5);
});

test('copy button hover shows one fill, not a second one behind the icon', async ({ page }) => {
  await page.goto(COLOR_URL);
  const btn = page.locator('.sg-swatch__field .sg-copy').first();
  await btn.hover();
  const iconBg = await btn.locator('svg').evaluate((el) => getComputedStyle(el).backgroundColor);
  expect(iconBg).toBe('rgba(0, 0, 0, 0)');
});

// ---- Code blocks match the Figma code style, site-wide ----
async function codeBlockStyle(page) {
  return page.locator('.code-block').first().evaluate((el) => {
    const pre = getComputedStyle(el.querySelector('pre'));
    const code = getComputedStyle(el.querySelector('pre code'));
    const span = el.querySelector('pre code span');
    return {
      bg: pre.backgroundColor, radius: pre.borderTopLeftRadius,
      font: code.fontFamily, size: code.fontSize, lh: code.lineHeight, color: code.color,
      wrap: code.whiteSpace, spanColor: span ? getComputedStyle(span).color : code.color,
    };
  });
}

for (const url of [COLOR_URL, testLocation + '/markdown/']) {
  test(`code blocks use the Figma style ${url}`, async ({ page }) => {
    await page.goto(url);
    const s = await codeBlockStyle(page);
    expect(s.bg).toBe('rgb(241, 246, 251)');
    expect(s.radius).toBe('8px');
    expect(s.font.startsWith('"Noto Sans Mono"')).toBe(true);
    expect(s.size).toBe('13px');
    expect(s.lh).toBe('22px');
    expect(s.color).toBe('rgb(30, 30, 30)');
    expect(s.spanColor).toBe('rgb(30, 30, 30)');
    expect(s.wrap).toBe('pre-wrap');
    await expect(page.locator('.code-block-language')).toHaveCount(0);
  });
}

test.describe('copy code', () => {
  test.use({ permissions: ['clipboard-read', 'clipboard-write'] });

  test('copies the whole block on the Color page', async ({ page }) => {
    await page.goto(COLOR_URL);
    await page.getByRole('button', { name: 'Copy code' }).first().click();
    const text = await page.evaluate(() => navigator.clipboard.readText());
    expect(text.startsWith('# ODI categorical colors, in order')).toBe(true);
    expect(text).toContain('odi_all = odi_default + odi_extended');
  });

  test('works on a page without a status message of its own', async ({ page }) => {
    await page.goto(testLocation + '/markdown/');
    await page.getByRole('button', { name: 'Copy code' }).first().click();
    await expect(page.locator('.sg-copy-status')).toContainText('Copied');
  });
});

test('code block has no extra space above the code and a blue copy icon', async ({ page }) => {
  await page.goto(COLOR_URL);
  const r = await page.locator('.code-block').first().evaluate((el) => {
    const pre = el.querySelector('pre').getBoundingClientRect(), code = el.querySelector('pre code').getBoundingClientRect();
    return { gap: Math.round(code.top - pre.top), color: getComputedStyle(el.querySelector('.code-block-copy')).color };
  });
  expect(r.gap).toBe(16);
  expect(r.color).toBe('rgb(13, 79, 140)');
});

// ---- Sequential and diverging ramps match Figma ----
test('ramps use the Figma row layout', async ({ page }) => {
  await page.goto(COLOR_URL);
  await expect(page.locator('.sg-ramp')).toHaveCount(9);
  const r = await page.locator('.sg-ramp').first().evaluate((el) => {
    const box = (e) => { const b = e.getBoundingClientRect(); return [Math.round(b.width), Math.round(b.height)]; };
    const row = el.querySelector('.sg-ramp-row');
    const extra = el.querySelector('.sg-ramp-extra');
    return {
      title: el.querySelector('.sg-ramp__title').textContent.trim(),
      color: box(row.querySelector('.sg-ramp-row__color')),
      field: box(row.querySelector('.sg-swatch__field')),
      label: row.querySelector('.sg-ramp-row__color').innerText.replace(/\s+/g, ' ').trim(),
      note: row.querySelector('.sg-ramp-row__note').textContent.trim(),
      noteColor: getComputedStyle(row.querySelector('.sg-ramp-row__note')).color,
      extraBg: getComputedStyle(extra).backgroundColor,
      extraTitle: extra.querySelector('.sg-ramp-extra__title').textContent.trim(),
      extraRows: extra.querySelectorAll('.sg-ramp-row').length,
    };
  });
  expect(r.title).toBe('Blue');
  expect(r.color).toEqual([260, 48]);
  expect(r.field).toEqual([210, 48]);
  expect(r.label).toBe('1 #f1f6fb');
  expect(r.note).toBe('Lightest');
  expect(r.noteColor).toBe('rgb(114, 113, 124)');
  expect(r.extraBg).toBe('rgb(241, 246, 251)');
  expect(r.extraTitle).toBe('Only if you need 6 ranges');
  expect(r.extraRows).toBe(1);
});

test('ramp markup has no stray paragraphs and the extra box hugs its rows', async ({ page }) => {
  await page.goto(COLOR_URL);
  await expect(page.locator('.sg-ramp p:not([class])')).toHaveCount(0);
  const h = await page.locator('.sg-ramp-extra').first().evaluate((el) => Math.round(el.getBoundingClientRect().height));
  expect(h).toBeLessThanOrEqual(12 + 20 + 8 + 48 + 12 + 2);
});

for (const [section, firstNote] of [
  ['Neutrals and text', 'Other, unknown, no data'],
  ['Show increase and decrease', 'Increase (teal)'],
  ['Show status', 'On track (green)'],
]) {
  test(`${section} uses the Figma rows with dark semibold notes`, async ({ page }) => {
    await page.goto(COLOR_URL);
    const r = await page.locator('h2', { hasText: section }).evaluate((h) => {
      let el = h.nextElementSibling;
      while (el && !el.classList.contains('sg-ramp')) el = el.nextElementSibling;
      const row = el.querySelector('.sg-ramp-row');
      const note = row.querySelector('.sg-ramp-row__note');
      const b = row.querySelector('.sg-ramp-row__color').getBoundingClientRect();
      const cs = getComputedStyle(note);
      return { w: Math.round(b.width), h: Math.round(b.height), note: note.textContent.trim(), color: cs.color, weight: cs.fontWeight };
    });
    expect([r.w, r.h]).toEqual([260, 48]);
    expect(r.note).toBe(firstNote);
    expect(r.color).toBe('rgb(30, 30, 30)');
    expect(r.weight).toBe('600');
  });
}

test('four versions use the Figma layout', async ({ page }) => {
  await page.goto(COLOR_URL);
  await expect(page.locator('.sg-version')).toHaveCount(9);
  const r = await page.locator('.sg-version').first().evaluate((el) => {
    const cells = el.querySelectorAll('.sg-version-cell');
    const c = cells[0];
    const h = (e) => Math.round(e.getBoundingClientRect().height);
    const label = c.querySelector('.sg-version-cell__label');
    const hex = c.querySelector('.sg-swatch__hex');
    return {
      title: el.querySelector('.sg-version__title').textContent.replace(/\s+/g, ' ').trim(),
      cells: cells.length,
      labels: [...cells].map((x) => x.querySelector('.sg-version-cell__label').textContent.trim()),
      labelColor: getComputedStyle(label).color, labelSize: getComputedStyle(label).fontSize,
      colorH: h(c.querySelector('.sg-version-cell__color')), fieldH: h(c.querySelector('.sg-swatch__field')),
      hexSize: getComputedStyle(hex).fontSize, hexWeight: getComputedStyle(hex).fontWeight,
      sameRow: new Set([...cells].map((x) => Math.round(x.getBoundingClientRect().top))).size,
    };
  });
  expect(r.title).toBe('1 Blue');
  expect(r.cells).toBe(4);
  expect(r.labels).toEqual(['Main fill', 'Paired', 'Line', 'Background']);
  expect(r.labelColor).toBe('rgb(114, 113, 124)');
  expect(r.labelSize).toBe('14px');
  expect(r.colorH).toBe(56);
  expect(r.fieldH).toBe(38);
  expect(r.hexSize).toBe('19px');
  expect(r.hexWeight).toBe('700');
  expect(r.sameRow).toBe(1);
});

test('blue and purple Line are one step darker than their Main', async ({ page }) => {
  await page.goto(COLOR_URL);
  const lines = await page.locator('.sg-version').evaluateAll((els) =>
    els.map((el) => [...el.querySelectorAll('.sg-version-cell')].find((c) => c.querySelector('.sg-version-cell__label').textContent.trim() === 'Line').dataset.hex));
  expect(lines[0]).toBe('#00315f');
  expect(lines[4]).toBe('#523d9d');
  await expect(page.locator('main pre code').filter({ hasText: 'odi_line = ["#00315f", "#a35f0e", "#006c58", "#a63f44", "#523d9d"' })).toHaveCount(1);
  await expect(page.locator('main .styleguide')).not.toContainText('the Main fill and Line are the same');
});
