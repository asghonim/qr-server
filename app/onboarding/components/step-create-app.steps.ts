import { Then, When } from '@/fixtures.steps';
import { expect } from 'playwright/test';

When('I type {string} in the app name field', async ({ page }, name: string) => {
  await page.getByTestId('ob-app-name-input').fill(name);
});

Then('I see the app name input', async ({ page }) => {
  await expect(page.getByTestId('ob-app-name-input')).toBeVisible();
});

When('I select environment "staging"', async ({ page }) => {
  await page.getByTestId('ob-env-staging-btn').click();
});

When('I select environment "production"', async ({ page }) => {
  await page.getByTestId('ob-env-production-btn').click();
});

Then('staging environment is selected', async ({ page }) => {
  await expect(page.getByTestId('ob-env-staging-btn')).toHaveClass(/active/);
});

Then('production environment is selected', async ({ page }) => {
  await expect(page.getByTestId('ob-env-production-btn')).toHaveClass(/active/);
});

When('I select algorithm {string} on create app', async ({ page }, algo: string) => {
  await page.getByTestId('ob-algo-select').selectOption(algo);
});

When('I type {string} in the onboarding TTL field', async ({ page }, ttl: string) => {
  await page.getByTestId('ob-ttl-input').fill(ttl);
});
