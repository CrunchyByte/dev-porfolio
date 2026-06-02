const { test, expect } = require('@playwright/test');

test('homepage loads', async ({ page }) => {
  const baseURL = process.env.BASE_URL;

  await page.goto(baseURL, {
    waitUntil: 'domcontentloaded'
  });

  await expect(page).toHaveTitle(/Dev Portfolio/);
});
