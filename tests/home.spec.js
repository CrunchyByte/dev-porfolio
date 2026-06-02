const { test, expect } = require('@playwright/test');

test('homepage loads', async ({ page }) => {
  await page.goto('https://dev-portfolio.azurestaticapps.net');

  await expect(page).toHaveTitle(/Dev Portfolio/);
});
