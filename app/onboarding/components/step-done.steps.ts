import { Then, When } from '@/fixtures.steps';
import { expect } from 'playwright/test';

When('I click open dashboard from onboarding', async ({ page }) => {
  await page.getByTestId('ob-open-dashboard-link').click();
});

When('I click read docs from onboarding', async ({ page }) => {
  await page.getByTestId('ob-read-docs-link').click();
});

Then('I see the open dashboard link', async ({ page }) => {
  await expect(page.getByTestId('ob-open-dashboard-link')).toBeVisible();
});

Then('I see the read docs link', async ({ page }) => {
  await expect(page.getByTestId('ob-read-docs-link')).toBeVisible();
});
