const { test, expect } = require('@playwright/test');

test('homepage loads', async ({ page }) => {
  const baseURL = process.env.BASE_URL || 'https://dev-portfolio.azurestaticapps.net';

  await page.goto(baseURL);

  await expect(page).toHaveTitle(/Dev Portfolio/);
});
