const { test, expect } = require('@playwright/test');

test('homepage loads', async ({ page }) => {
  await page.goto('https://zealous-field-04ce67510.7.azurestaticapps.net');

  await expect(page).toHaveTitle(/Dev Portfolio/);
});
