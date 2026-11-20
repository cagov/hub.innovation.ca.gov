import { test } from "@playwright/test";
import {
  injectAxe,
  checkA11y
} from "axe-playwright";
import { STYLEGUIDE_URLS } from "./styleguide-urls.mjs";

const testLocation = "http://localhost:8080";

const pageUrls = ["/", ...STYLEGUIDE_URLS];

pageUrls.forEach(pageUrl => {

  test(`a11y page tests ${pageUrl}`, async ({ page }) => {

    await page.goto(testLocation+pageUrl);
  
    await injectAxe(page);

    await checkA11y(page, null, {
      detailedReport: true,
      detailedReportOptions: { html: true },
    })
  
  });
});
