const { test, expect } = require('@playwright/test');

test('homepage loads', async ({ page }) => {
  const baseURL = process.env.BASE_URL || 'https://zealous-field-04ce67510.7.azurestaticapps.net';

  await page.goto(baseURL);

  await expect(page).toHaveTitle(/Dev Portfolio/);
});
